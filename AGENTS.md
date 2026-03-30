# AGENTS.md

> Project context for AI coding agents working on this codebase.

## Project Overview

Mailgun-to-SES Proxy — an API server that mimics Mailgun's API endpoints while routing email sending through Amazon SES. Primarily used with Ghost CMS for newsletter delivery.

**Stack:** Next.js (API routes) + Bun runtime + Prisma (MySQL) + AWS SES + AWS SQS

## Architecture

### Entry Points
- `server.ts` — Custom HTTP server that starts Next.js and launches background SQS queue processors
- `proxy.ts` — Next.js middleware for API key authentication

### API Routes
- `POST /v3/[siteId]/messages` — Queues newsletter emails (Mailgun-compatible endpoint called by Ghost)
- `POST /v1/send` — Sends transactional/system emails directly via SES (no queue)
- `GET /v3/[siteId]/events` — Returns email events in Mailgun-compatible format
- `GET /stats/[action]` — Email statistics
- `GET /healthcheck` — Health check

### Newsletter Sending Pipeline
1. **Ingest** (`app/v3/[siteId]/messages/route.ts`): Ghost sends a batch → saved to `newsletterBatch` table → SQS message queued with batch DB ID
2. **Process** (`service/background-process.ts`): `processNewsletterQueue()` polls SQS in a `while(true)` loop
3. **Send** (`service/newsletter-service.ts`): `validateAndSend()` receives an SQS message → `sendMail()` iterates over recipients, sends each via SES, records in `newsletterMessages` table
4. **Events** (`service/events-service/index.ts`): SES delivery/bounce/complaint notifications arrive via a separate SQS queue and are stored in `newsletterNotifications`

### Duplicate Send Prevention
The newsletter queue implements a multi-layered approach to prevent duplicate sends:

1. **SQS Visibility Timeout (900s)**: Set to 15 minutes to ensure the message stays invisible while a large batch is being processed. Prevents SQS from re-delivering the message during processing.

2. **Idempotency Check**: Before sending to each recipient, `checkNewsletterAlreadySent()` queries the `newsletterMessages` table for an existing record with the same `(batchId, toEmail)`. Already-sent recipients are skipped.

3. **Automatic Retry for Partial Failures**: If `sendMail()` throws (e.g. SES outage), the SQS message is NOT deleted — SQS will re-deliver it. On retry, already-sent recipients are skipped via the idempotency check, so only failed recipients are retried.

4. **Max Retry Limit (3)**: If `ApproximateReceiveCount > 3`, the message is deleted from SQS and logged as permanently failed to prevent infinite retry loops.

5. **Per-recipient error handling**: Individual recipient failures inside `sendMail()` are caught, logged to `newsletterErrors`, and the loop continues to the next recipient. The batch is only considered failed if `sendMail()` itself throws.

### Key Services
- `service/newsletter-service.ts` — Newsletter queue processing, SES sending, idempotency
- `service/transaction-email-service.ts` — Transactional email sending (direct, no queue)
- `service/background-process.ts` — SQS polling loops for newsletters, newsletter events, and system events
- `service/events-service/index.ts` — Processes SES notification events from SQS
- `service/database/db.ts` — All Prisma database operations
- `service/aws/awsHelper.ts` — AWS client singletons (SES, SQS) and queue URL constants
- `lib/core/aws-utils.ts` — `preparePayload()` (Mailgun→SES format), event parsing, Mailgun event formatting

### Database (Prisma + MySQL)
Key tables: `newsletterBatch`, `newsletterMessages`, `newsletterErrors`, `newsletterNotifications`, `systemMails`

## Development

- **Runtime:** Bun
- **Tests:** `bun run test` (Vitest, 190 tests)
- **Build:** `bun run build` (Prisma generate + Next.js build + tsc for server)
- **Dev:** `npm run dev`

## Important Conventions

- All AWS clients are lazily initialized singletons (`service/aws/awsHelper.ts`)
- SES region can be a comma-separated list for newsletter sending (random selection)
- The `v:email-id` field from Mailgun is used as the `batchId` for tracking
- `recipient-variables` from Mailgun are used for per-recipient template substitution (`%recipient.key%`)
- Structured logging via Pino with child loggers per service

# Agents

This file is intended to document the agents, AI tools, or automated services interacting with or utilized within this project.

## Project Stack

This project is built using the following technologies:

- **Framework**: Next.js (App Router/API Routes)
- **Language**: TypeScript
- **Database ORM**: Prisma (with MariaDB adapter)
- **Cloud Services**: AWS SDK (`@aws-sdk/client-sesv2`, `@aws-sdk/client-sqs`)
- **Validation**: Zod
- **Logging**: Pino
- **Testing**: Vitest
- **Styling**: Tailwind CSS

## Directory Structure

```text
mailgun-ses-proxy/      
├── app/                        # Next.js application routes (API endpoints)
│   ├── healthcheck/            # Health check endpoints
│   ├── stats/                  # Statistics endpoints
│   ├── v1/                     # API version 1 routes
│   └── v3/                     # API version 3 routes
├── lib/                        # Core library code, utilities, and shared configurations
│   ├── api-response.ts         # API response formatting
│   ├── authentication/         # Auth middleware/logic
│   ├── core/                   # Core utilities
│   └── database/               # Database connection/setup
├── prisma/                     # Prisma schema and migrations
├── service/                    # Business logic and external service integrations
│   ├── aws/                    # AWS SES and SQS wrappers
│   ├── database/               # Database service methods
│   ├── error-handler/          # Centralized error handling
│   ├── validation-service/     # Input validation logic
│   ├── background-process.ts   # Background job processing
│   ├── events-service.ts       # Event handling logic
│   ├── newsletter-service.ts
│   ├── stats-service.ts
│   ├── system-email-notification.ts
│   └── transaction-email-service.ts
├── tests/                      # Vitest test files
├── types/                      # TypeScript type definitions
├── proxy.ts                    # Proxy server entry point/logic
├── server.ts                   # Main server entry point
└── next.config.ts              # Next.js configuration
```

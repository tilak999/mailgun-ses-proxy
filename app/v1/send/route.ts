import { ApiResponse } from "@/lib/api-response"
import logger from "@/lib/core/logger"
import { sendSystemMail } from "@/service/transaction-email-service"
import { ValidationService, type EmailPayload } from "@/service/validation-service/validation"
import { NextRequest } from "next/server"

const log = logger.child({ module: "api:v1:send" })

/**
 * Send system emails via SES
 *
 * @route POST /v1/send
 * @description Sends transactional emails through Amazon SES with validation and error handling
 * @body {EmailPayload} - Email payload with from, to, subject, html, and optional replyTo
 * @returns {ApiResponse} - Standardized API response with message ID on success
 */
export async function POST(req: NextRequest): Promise<Response> {
    const requestId = crypto.randomUUID()
    const requestLog = log.child({ requestId })

    try {
        requestLog.info("Processing system email request")

        // Parse and validate request body
        const rawBody = await parseRequestBody(req)
        const emailPayload = prepareEmailPayload(rawBody)

        // Validate email payload
        const validation = ValidationService.validateEmailPayload(emailPayload)
        if (!validation || !validation.data) {
            requestLog.warn(
                {
                    errors: validation.errors,
                    payload: sanitizePayloadForLogging(emailPayload),
                },
                "Email payload validation failed"
            )

            return ApiResponse.validationError(`Validation failed: ${validation.errors.join("; ")}`)
        }

        // Send email through SES
        const result = await sendSystemMail(validation.data)

        requestLog.info(
            {
                messageId: result.messageId,
                to: validation.data.to,
                subject: validation.data.subject,
            },
            "System email sent successfully"
        )

        return ApiResponse.success({
            messageId: result.messageId,
            status: "sent",
            recipients: validation.data.to.length,
        })
    } catch (error) {
        requestLog.error({ error, requestId }, "Failed to send system email")

        // Handle different error types
        if (error instanceof SyntaxError) {
            return ApiResponse.badRequest("Invalid JSON in request body")
        }

        if (error instanceof Error) {
            return ApiResponse.internalError(error.message)
        }

        return ApiResponse.internalError("An unexpected error occurred")
    }
}

/**
 * Parse request body with proper error handling
 */
async function parseRequestBody(req: NextRequest): Promise<Record<string, any>> {
    try {
        const body = await req.json()

        if (!body || typeof body !== "object") {
            throw new Error("Request body must be a valid JSON object")
        }

        return body
    } catch (error) {
        if (error instanceof SyntaxError) {
            throw new SyntaxError("Invalid JSON in request body")
        }
        throw error
    }
}

/**
 * Prepare email payload with defaults and normalization
 */
function prepareEmailPayload(rawBody: Record<string, any>): Partial<EmailPayload> {
    const payload = { ...rawBody }

    // Set default system from address if not provided
    if (!payload.from) {
        payload.from = process.env.SYSTEM_FROM_ADDRESS

        if (!payload.from) {
            throw new Error("No 'from' address provided and SYSTEM_FROM_ADDRESS not configured")
        }
    }

    // Set replyTo to from address if not provided
    if (!payload.replyTo) {
        payload.replyTo = payload.from
    }

    // Normalize 'to' field to array
    if (payload.to && typeof payload.to === "string") {
        payload.to = [payload.to]
    }

    return payload
}

/**
 * Sanitize email payload for logging (remove sensitive content)
 */
function sanitizePayloadForLogging(payload: Partial<EmailPayload>) {
    return {
        from: payload.from,
        to: payload.to,
        subject: payload.subject,
        hasHtml: !!payload.html,
        htmlLength: payload.html?.length || 0,
    }
}

import { ApiResponse, ErrorHandler, ValidationService, logger } from "@/lib/core"
import { sendSystemMail } from "@/service/transaction-email-service"
import { NextRequest } from "next/server"

const log = logger.child({ module: "route:send" })

/**
 * Endpoint to send system emails
 * @route POST /v1/send
 * @returns Response with standardized format
 */
export async function POST(req: NextRequest) {
    try {
        // Parse request body
        const body = await req.json()

        // Add system `from` address if not provided
        if (!body.from) {
            body.from = process.env.SYSTEM_FROM_ADDRESS || ""
        }

        // Add replyTo if not provided (use from address as default)
        if (!body.replyTo) {
            body.replyTo = body.from
        }

        // Validate email payload
        const validation = ValidationService.validateEmailPayload(body)
        if (!validation.isValid) {
            log.warn({ errors: validation.errors }, "Invalid email payload received")
            return ApiResponse.validationError(validation.errors.join(", "))
        }

        const payload = validation.data!

        // Send email
        const result = await sendSystemMail(payload)

        log.info(
            {
                to: payload.to,
                messageId: result.messageId,
            },
            `System email sent successfully`
        )

        return ApiResponse.success(result)
    } catch (error) {
        const errorResponse = ErrorHandler.handleApiError(error, "POST /v1/send")
        log.error(
            {
                error: errorResponse.error,
                message: errorResponse.message,
            },
            "Failed to send system email"
        )

        return ErrorHandler.createResponse(errorResponse)
    }
}

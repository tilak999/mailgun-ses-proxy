import logger from "./logger"
import { EmailPayload } from "@/types/default"

export { default as logger } from "./logger"

export class ApiResponse {
    static success(data: any, message?: string) {
        return Response.json(
            {
                success: true,
                data,
                message: message || "Operation completed successfully",
            },
            { status: 200 }
        )
    }

    static validationError(message: string) {
        return Response.json(
            {
                success: false,
                error: "Validation Error",
                message,
            },
            { status: 400 }
        )
    }

    static error(message: string, status: number = 500) {
        return Response.json(
            {
                success: false,
                error: "Internal Server Error",
                message,
            },
            { status }
        )
    }
}

export class ValidationService {
    static validateEmailPayload(payload: any): { isValid: boolean; errors: string[]; data?: EmailPayload } {
        const errors: string[] = []

        // Handle null/undefined payload
        if (!payload || typeof payload !== "object") {
            errors.push("'from' field is required")
            errors.push("'to' field must be a non-empty array")
            errors.push("'subject' field is required")
            errors.push("'html' field is required")
            return { isValid: false, errors }
        }

        if (!payload.from) {
            errors.push("'from' field is required")
        }

        if (!payload.to || !Array.isArray(payload.to) || payload.to.length === 0) {
            errors.push("'to' field must be a non-empty array")
        }

        if (!payload.subject) {
            errors.push("'subject' field is required")
        }

        if (!payload.html) {
            errors.push("'html' field is required")
        }

        if (errors.length > 0) {
            return { isValid: false, errors }
        }

        return {
            isValid: true,
            errors: [],
            data: payload as EmailPayload,
        }
    }
}

export class ErrorHandler {
    static handleApiError(error: unknown, context: string) {
        const log = logger.child({ context })

        if (error instanceof Error) {
            log.error({ error: error.message, stack: error.stack }, "API Error occurred")
            return {
                error: error.name,
                message: error.message,
                status: 500,
            }
        }

        log.error({ error }, "Unknown API Error occurred")
        return {
            error: "Unknown Error",
            message: "An unexpected error occurred",
            status: 500,
        }
    }

    static createResponse(errorResponse: { error: string; message: string; status: number }) {
        return Response.json(
            {
                success: false,
                error: errorResponse.error,
                message: errorResponse.message,
            },
            { status: errorResponse.status }
        )
    }
}

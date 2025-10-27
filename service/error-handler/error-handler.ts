import logger from "@/lib/core/logger"

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
                error: errorResponse.error,
                message: errorResponse.message,
            },
            { status: errorResponse.status }
        )
    }
}
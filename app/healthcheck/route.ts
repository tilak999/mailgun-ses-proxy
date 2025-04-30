/**
 * Endpoint to check the health of the server
 * @route GET /healthcheck
 * @returns Response{ timestamp: Date, status: number }
 */

export function GET() {
    return Response.json({
        timestamp: new Date(),
        status: 200,
    })
}

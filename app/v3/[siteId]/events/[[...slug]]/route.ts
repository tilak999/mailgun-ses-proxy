import logger from "@/lib/logger"
import { fetchAnalyticsEvents, validateQueryParams } from "@/service/events-service"
import { NextRequest } from "next/server"

const log = logger.child({ path: "app/v3/events" })
type pathParam = { params: Promise<{ siteId: string, slug?: string[] }> }

/**
 * Endpoint to fetch email events
 * @route GET /v3/[siteId]/events/[...slug]
 * @returns Response: {
    items: MailgunEvents[];
    paging: {
        next: string;
    }
}
*/
export async function GET(req: NextRequest, { params }: pathParam) {
    const { siteId, slug } = await params
    try {
        const queryParams = validateQueryParams(req.nextUrl.searchParams)
        log.debug({ queryParams, siteId, slug }, "query params")
        const events = await fetchAnalyticsEvents(queryParams, siteId, req.url)
        log.info({ count: events.items.length, siteId, slug }, "analytics events count")
        return Response.json(events, { status: 200 })
    } catch (e) {
        log.error(e, 'error when fetching analytics events')
        const errorMessage = e instanceof Error ? e.message : "An error occurred";
        return Response.json({ message: errorMessage }, { status: 400 })
    }
}

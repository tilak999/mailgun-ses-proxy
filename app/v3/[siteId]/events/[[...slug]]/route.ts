import logger from "@/lib/logger"
import { getEmailEvents } from "@/service/email-event-service"
import { NextRequest } from "next/server"

const log = logger.child({ service: "app:v3:events" })

interface QueryParams {
    start: number
    limit: number
    event: string
    begin: number
    end: number
    order: "asc" | "desc"
}

function validateQueryParams(searchParams: URLSearchParams): QueryParams {
    const exception = (missingParam: string) => {
        throw `Missing query param (${missingParam})`
    }

    const event = searchParams.get("event") || exception("event")
    const begin = searchParams.get("begin") || exception("begin")
    const end = searchParams.get("end") || exception("end")

    const queryParams = {
        start: parseInt(searchParams.get("start") || "0"),
        limit: parseInt(searchParams.get("limit") || "300"),
        event: event,
        begin: parseInt(begin),
        end: parseInt(end),
        order: searchParams.get("ascending") ? "asc" : "desc",
    } as QueryParams

    return queryParams
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ siteId: string, slug: string[] | undefined }> }) {
    const { siteId, slug } = await params
    if (slug) log.info({ slug }, "incoming request with slug")
    try {
        const queryParams = validateQueryParams(req.nextUrl.searchParams)
        const queryPayload = {
            siteId: siteId,
            type: queryParams.event,
            begin: queryParams.begin,
            end: queryParams.end,
            order: queryParams.order,
            limit: queryParams.limit,
            start: queryParams.start,
            url: req.url,
        }
        log.info({ queryPayload }, "Fetching events with params")
        const response = await getEmailEvents(queryPayload)
        log.debug({ response }, "Events fetched successfully")
        return Response.json(response, { status: 200 })
    } catch (e) {
        log.error('Error when queuing message', e)
        return Response.json({ message: e }, { status: 400 })
    }
}

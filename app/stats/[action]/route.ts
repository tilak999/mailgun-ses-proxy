import logger from "@/lib/core/logger"
import { getNewsletterUsage, GetNewsletterUsageQuery } from "@/service/stats-service"

const log = logger.child({ path: "app/stats/[action]" })

type PathParam = { params: Promise<{ action: string }> }

/**
 * This method allows fetching the stats for a Site, based on siteId and date range
 * @param GetNewsletterUsageQuery
 * @param PathParam
 * @returns
 */
export async function POST(req: Request, { params }: PathParam) {
    const input = (await req.json()) as GetNewsletterUsageQuery
    try {
        switch ((await params).action) {
            case "getNewsletterUsage":
                const result = await getNewsletterUsage(input)
                return Response.json({
                    status: "ok",
                    data: { message: "newsletter usage", ...result },
                })
            default:
                return Response.json({ message: "Invalid action" }, { status: 400 })
        }
    } catch (error) {
        log.error(error, "Error in stats route")
        return Response.json({ message: "Internal server error" }, { status: 500 })
    }
}

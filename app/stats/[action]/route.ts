import logger from "@/lib/core/logger";
import { getNewsletterUsage } from "@/service/stats-service";

const log = logger.child({ path: "app/stats/[action]" })

type pathParam = { params: Promise<{ action: string }> }

export async function POST(req: Request, { params }: pathParam) {
    const input = (await req.json()) as { from: number; to: number; siteId: string }
    try {
        switch ((await params).action) {
            case "getNewsletterUsage":
                const result = await getNewsletterUsage(input)
                return Response.json(result)
            default:
                return Response.json({ message: "Invalid action" }, { status: 400 })
        }
    } catch (error) {
        log.error(error, "Error in stats route")
        return Response.json({ message: "Internal server error" }, { status: 500 })
    }
}

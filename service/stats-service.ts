import { prisma } from "@/lib/db";
import logger from "@/lib/logger";

const log = logger.child({ path: "service/stats-service" })

export async function getNewsletterUsage(input: { from: number; to: number; siteId: string }) {
    log.debug({ input }, "[getNewsletterUsage] input parameters")
    const searchParam = {
        where: {
            created: {
                gte: new Date(input.from),
                lte: new Date(input.to),
            },
            newsletterBatch: {
                siteId: input.siteId
            }
        },
    }
    const usageCount = await prisma.newsletterMessages.count(searchParam);
    return {
        status: "ok",
        data: {
            forRange: { ...searchParam.where.created },
            message: "newsletter usage",
            count: usageCount,
            timestamp: new Date().toISOString(),
        },
    }
}
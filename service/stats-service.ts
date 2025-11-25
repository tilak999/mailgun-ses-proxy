import { prisma } from "@/service/database/db";
import logger from "@/lib/core/logger";

const log = logger.child({ path: "service/stats-service" })

interface NewsletterUsage {
    forRange: { 
        gte: Date,
        lte: Date 
    },
    count: number,
    timestamp: String,
}

export type GetNewsletterUsageQuery = { from: number; to: number; siteId: string }

export async function getNewsletterUsage(input: GetNewsletterUsageQuery): Promise<NewsletterUsage> {
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
        forRange: { ...searchParam.where.created },
        count: usageCount,
        timestamp: new Date().toISOString(),
    }
}
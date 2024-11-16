import { FastifyReply, FastifyRequest } from "fastify"
import { prisma } from "server/lib/db"

export function statsFunction(req: FastifyRequest, reply: FastifyReply) {
    const { action } = req.params as { action: string }
    const input = req.body as { from: string; to: string; siteId: string }
    const error = {
        status: "error",
        data: {
            message: "invalid action",
        },
    }

    switch (action) {
        case "getNewsletterUsage":
            return reply.send(getNewsletterUsage(input))
        default:
            return reply.send(error)
    }
}

async function getNewsletterUsage(input: { from: string; to: string; siteId: string }) {
    const usageCount = await prisma.newslettersMessages.count({
        where: {
            created: {
                gte: new Date(input.from),
                lte: new Date(input.to),
            },
            siteId: input.siteId,
        },
    })
    return {
        status: "ok",
        data: {
            message: "get newsletter usage",
            count: usageCount,
            timestamp: new Date().toISOString(),
        },
    }
}

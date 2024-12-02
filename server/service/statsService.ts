import { FastifyReply, FastifyRequest } from "fastify"
import { prisma } from "server/lib/db"

const error = {
    status: "error",
    data: {
        message: "invalid action",
    },
}

export async function statsFunction(req: FastifyRequest, reply: FastifyReply) {
    const { action } = req.params as { action: string }
    const input = req.body as { from: number; to: number; siteId: string }
    switch (action) {
        case "getNewsletterUsage":
            return reply.send(await getNewsletterUsage(input))
        default:
            return reply.send(error)
    }
}

async function getNewsletterUsage(input: { from: number; to: number; siteId: string }) {
    const query = {
        where: {
            created: {
                gte: new Date(input.from),
                lte: new Date(input.to),
            },
            siteId: input.siteId,
        },
    }
    const usageCount = await prisma.newslettersMessages.count(query)
    return {
        status: "ok",
        data: {
            message: "newsletter usage",
            count: usageCount,
            timestamp: new Date().toISOString(),
        },
    }
}

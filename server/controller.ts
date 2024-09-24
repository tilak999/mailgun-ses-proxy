import { FastifyReply, FastifyRequest } from "fastify"
import { addToNewsletterQueue } from "./service/newsletterService"
import { getEvents } from "./service/eventsService"
import { EventsQueryParams } from "../types/type"
import { EmailPayload, sendSystemMail } from "./service/transaction-email-service"

export async function messageController(req: FastifyRequest, reply: FastifyReply) {
    try {
        const { siteId } = req.params as { siteId: string }
        const messageBody = req.body as any
        const response = await addToNewsletterQueue(messageBody, siteId)
        req.log.info(`Message queued to newsletter SQS: ${response.MessageId}`)
        reply.send({ id: messageBody["v:email-id"]["value"] })
    } catch (e) {
        req.log.error(`Error when queuing message: ${e}`)
        reply.code(400).send({ message: e })
    }
}

export async function events(req: FastifyRequest, reply: FastifyReply) {
    const { limit, event, begin, end, ascending, start } = req.query as EventsQueryParams
    const { siteId } = req.params as { siteId: string }
    const numlimit = parseInt(limit || "300")
    const numStart = parseInt(start || "0")
    const order = ascending ? "asc" : "desc"
    try {
        return getEvents({
            siteId,
            type: event,
            begin,
            end,
            order,
            limit: numlimit,
            url: `${req.protocol}://${req.hostname}${req.originalUrl}`,
            start: numStart,
        })
    } catch (e) {
        req.log.error(`Error when queuing message: ${e}`)
        reply.code(400).send({ message: e })
    }
}

export async function send(req: FastifyRequest, reply: FastifyReply) {
    const body = req.body as EmailPayload
    body.from = process.env.SYSTEM_FROM_ADDRESS || ""
    return sendSystemMail(body)
}

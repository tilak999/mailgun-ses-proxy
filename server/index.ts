import "dotenv/config"
import Fastify from "fastify"
import multipart from "@fastify/multipart"
import { events, messageController, send } from "./controller.js"
import { processEvents, processNewsletterQueue } from "./service/backgroundProcess.js"
import { withAuth } from "../server/lib/auth.js"
import { statsFunction } from "./service/statsService.js"

const fastify = Fastify({ logger: true, bodyLimit: 1048576 * 10, trustProxy: true })
fastify.register(multipart, { attachFieldsToBody: true })

fastify.get("/healthcheck", () => ({}))

fastify.post("/v3/:siteId/messages", withAuth(messageController))
fastify.post("/v1/send", send)
fastify.post("/v3/bypass/auth", () => ({}))

fastify.get("/v3/:siteId/events", withAuth(events))
fastify.get("/v3/:siteId/events/next", withAuth(events))
fastify.post("/stats/:action", withAuth(statsFunction))

fastify.ready(() => {
    processNewsletterQueue()
    processEvents()
})

fastify.listen({ port: parseInt(process.env.PORT || "8080"), host: process.env.HOST || "0.0.0.0" }).catch((err) => {
    fastify.log.error(err)
    process.exit(1)
})

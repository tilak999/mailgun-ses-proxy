import "dotenv/config"
import Fastify from "fastify"
import multipart from "@fastify/multipart"
import { events, messageController, test } from "./controller.js"
import { processEvents, processNewsletterQueue } from "./service/backgroundProcess.js"
import { withAuth } from "./lib/auth.js"

const fastify = Fastify({ logger: true, bodyLimit: 1048576 * 10 })
fastify.register(multipart, { attachFieldsToBody: true })
//fastify.register(fastifyCron, { jobs: JOBS })

fastify.post("/v3/:siteId/messages", withAuth(messageController))
fastify.get("/v3/:siteId/events", withAuth(events))
fastify.get("/v3/:siteId/events/next", withAuth(events))
fastify.post("/v3/bypass/auth", () => ({}))

fastify.ready(() => {
    //fastify.cron.startAllJobs()
    processNewsletterQueue()
    processEvents()
})

fastify.listen({ port: parseInt(process.env.PORT || "8080") }).catch((err) => {
    fastify.log.error(err)
    process.exit(1)
})

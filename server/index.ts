import "dotenv/config"
import Fastify from "fastify"
import multipart from "@fastify/multipart"
import fastifyCron from "fastify-cron"
import { JOBS } from "./cron/index.js"
import { events, messageController } from "./controller.js"
import { processEvents, processNewsletterQueue } from "./service/backgroundProcess.js"

const fastify = Fastify({ logger: true, bodyLimit: 1048576 * 10 })
fastify.register(multipart, { attachFieldsToBody: true })
fastify.register(fastifyCron, { jobs: JOBS })

fastify.post("/v3/:siteId/messages", messageController)
fastify.get("/v3/:siteId/events", events)
fastify.get("/v3/:siteId/events/next", events)

fastify.ready(() => {
    fastify.cron.startAllJobs()
    processNewsletterQueue()
    processEvents()
})

fastify.listen({ port: parseInt(process.env.PORT || "8080") }).catch((err) => {
    fastify.log.error(err)
    process.exit(1)
})

///v3/test.domain.com/events?limit=300&event=delivered+OR+opened+OR+failed+OR+unsubscribed+OR+complained&tags=bulk-email&begin=1726829767.22&end=1726835167.184&ascending=yes

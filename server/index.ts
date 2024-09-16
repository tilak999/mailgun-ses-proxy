import 'dotenv/config'
import Fastify from 'fastify'
import multipart from '@fastify/multipart'
import fastifyCron from 'fastify-cron'
import { JOBS } from './cron/index.js';
import { sendMail, fetchEvents } from './service/aws-service.js';

const fastify = Fastify({ logger: true })
fastify.register(multipart, { attachFieldsToBody: true })
fastify.register(fastifyCron, { jobs: JOBS })

fastify.post('/v3/:domainName/messages', sendMail)
fastify.get('/v3/:domainName/events', fetchEvents)

fastify.ready(() => {
    fastify.cron.startAllJobs()
})

fastify.listen({ port: parseInt(process.env.PORT || "8080") }).catch((err) => {
    fastify.log.error(err)
    process.exit(1)
})
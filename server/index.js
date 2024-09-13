import 'dotenv/config'
import Fastify from 'fastify'
import multipart from '@fastify/multipart'
import formatBody from './lib.js'

const fastify = Fastify({ logger: true })
fastify.register(multipart, { attachFieldsToBody: true })

fastify.post('/v3/:domainName/messages', async function handler(req, reply) {
    let body = formatBody(req.body)
    return { id: body["v:email-id"] }
})

fastify.listen({ port: process.env.PORT || 8080 }).catch((err) => {
    fastify.log.error(err)
    process.exit(1)
})
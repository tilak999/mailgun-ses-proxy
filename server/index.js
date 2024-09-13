import 'dotenv/config'
import Fastify from 'fastify'
import multipart from '@fastify/multipart'

const fastify = Fastify({ logger: true })
fastify.register(multipart, { attachFieldsToBody: true })


// Declare a route
fastify.post('/v3/:domainName/messages', async function handler(request, reply) {
    console.log(request.body)
    return request.body
})

fastify.listen({ port: process.env.PORT || 8080 }).catch((err) => {
    fastify.log.error(err)
    process.exit(1)
})
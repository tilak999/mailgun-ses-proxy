import { createServer, IncomingMessage, ServerResponse } from "http"
import { parse } from "url"
import next from "next"
import logger from "./lib/logger"
import { processNewsletterEventsQueue, processNewsletterQueue } from "./service/background-process"

const port = parseInt(process.env.PORT || "3000")
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

const handler = (req: IncomingMessage, res: ServerResponse) => {
    const parsedUrl = parse(req.url!, true)
    handle(req, res, parsedUrl)
}

app.prepare().then(() => {
    createServer(handler).listen(port)
    const type = dev ? "development" : process.env.NODE_ENV
    logger.info(`> Server listening at http://localhost:${port} as ${type}`)
    // process the SES queues for emails and events
    processNewsletterQueue()
    processNewsletterEventsQueue()
})

import logger from "@/lib/logger"
import { formDataToObject } from "@/lib/utilsx"
import { addNewsletterToQueue } from "@/service/newsletter-service"

const log = logger.child({ service: "app:v3:messages" })

export async function POST(req: Request, { params }: { params: Promise<{ siteId: string }> }) {
    const { siteId } = await params
    if (!siteId) {
        return Response.json({ message: "Site ID is required" }, { status: 400 })
    }

    try {
        const formData = await req.formData()
        const data = formDataToObject(formData)
        const { messageId, batchId } = await addNewsletterToQueue(data, siteId, null)
        log.info(`Message queued to newsletter SQS`, messageId)
        return Response.json({ id: batchId })
    } catch (e) {
        log.error(`Error when queuing message`, e)
        return Response.json({ message: e }, { status: 400 })
    }
}

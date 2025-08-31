import logger from "@/lib/logger"
import { formDataToObject } from "@/lib/form-data-to-object"
import { addNewsletterToQueue } from "@/service/newsletter-service"

const log = logger.child({ path: "app/v3/messages" })

type pathParam = { params: Promise<{ siteId: string }> }

export async function POST(req: Request, { params }: pathParam) {
    const { siteId } = await params
    if (!siteId) return Response.json({ message: "siteId is required" }, { status: 400 })

    try {
        const data = formDataToObject(await req.formData())
        // data.html, data.text
        const { messageId, batchId } = await addNewsletterToQueue(data, siteId, null)
        log.info({ messageId },"message queued to newsletter SQS",)
        return Response.json({ id: batchId })
    } catch (e) {
        log.error(e, "Error when queuing message to newsletter SQS")
        const errorMessage = e instanceof Error ? e.message : "An error occurred";
        return Response.json({ message: errorMessage }, { status: 400 })
    }
}

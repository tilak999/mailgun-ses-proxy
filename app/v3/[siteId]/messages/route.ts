import { formDataToObject } from "@/lib/utilsx"
import { addNewsletterToQueue } from "@/service/newsletter-service"

export async function POST(req: Request, { params }: { params: Promise<{ siteId: string }> }) {
    const { siteId } = await params
    if (!siteId) {
        return Response.json({ message: "Site ID is required" }, { status: 400 })
    }

    try {
        const formData = await req.formData()
        const data = formDataToObject(formData)
        const { messageId, batchId } = await addNewsletterToQueue(data, siteId, null)
        console.log(`Message queued to newsletter SQS: ${messageId}`)
        return Response.json({ id: batchId })
    } catch (e) {
        console.error(`Error when queuing message: ${e}`)
        return Response.json({ message: e }, { status: 400 })
    }
}

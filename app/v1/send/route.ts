import logger from "@/lib/logger"
import { sendSystemMail } from "@/service/transaction-email-service"
import { EmailPayload } from "@/types/default"
import { stringifyError } from "next/dist/shared/lib/utils"
import { NextRequest } from "next/server"

const log = logger.child({ module: "route:send" })

/**
 * Endpoint to send system emails
 * @route POST /v1/send
 * @returns Response {  id: string | undefined }
 */
export async function POST(req: NextRequest) {
    const body = await req.json()
    const payload = body as unknown as EmailPayload
    payload.from = process.env.SYSTEM_FROM_ADDRESS || ""

    try {
        const result = await sendSystemMail(payload)
        log.info({}, `mail sent to "${payload.to}" with messageId: ${result.messageId}`)
        return Response.json(result)
    } catch (error) {
        const errorMsg = error as {name: string, message: string}
        log.error({ error: errorMsg.message, to: payload.to }, "failed to send system email")
        return Response.json({ error: "Failed to send email" }, { status: 500 })
    }
}

import { sendSystemMail } from "@/service/transaction-email-service"
import { EmailPayload } from "@/types/default"
import { NextRequest } from "next/server"

/**
 * Endpoint to send system emails
 * @route POST /v1/send
 * @returns Response {  id: string | undefined }
 */
export async function POST(req: NextRequest) {
    const body = await req.json()
    const payload = body as unknown as EmailPayload
    payload.from = process.env.SYSTEM_FROM_ADDRESS || ""
    const result = await sendSystemMail(payload)
    return Response.json(result)
}

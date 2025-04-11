import { EmailPayload, sendSystemMail } from "@/service/transaction-email-service"
import { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
    const body = await req.json()
    const payload = body as unknown as EmailPayload
    payload.from = process.env.SYSTEM_FROM_ADDRESS || ""
    const result = await sendSystemMail(payload)
    return Response.json(result)
}

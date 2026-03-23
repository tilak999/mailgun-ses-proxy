import { SendEmailRequest } from "@aws-sdk/client-sesv2"
import { MailgunMessage } from "@/types/mailgun"
import { NotificationEvent } from "../../lib/core/aws-utils"
import { safeStringify } from "../../lib/core/common"
import { prisma } from "../../lib/database"
export { prisma }

export async function createNewsletterBatchEntry(siteId: string, message: MailgunMessage) {
    const batchId = message["v:email-id"] || "no-batch-id-provided"
    const contents = safeStringify(message)
    const fromEmail = message.from
    return prisma.newsletterBatch.create({
        select: { id: true },
        data: {
            siteId,
            batchId,
            contents,
            fromEmail,
        },
    })
}

export async function createNewsletterEntry(messageId: string, batchId: string, payload: SendEmailRequest) {
    const toEmail = payload.Destination?.ToAddresses?.join("") || ""
    return prisma.newsletterMessages.create({
        data: {
            newsletterBatchId: batchId,
            formatedContents: safeStringify(payload),
            toEmail,
            messageId,
        },
    })
}

export async function createNewsletterErrorEntry(
    errorMessage: string,
    siteId: string,
    batchId: string,
    payload: SendEmailRequest
) {
    const toEmail = payload.Destination?.ToAddresses?.join("") || ""
    return prisma.newsletterErrors.create({
        data: {
            error: errorMessage,
            newsletterBatchId: batchId,
            messageId: siteId,
            formatedContents: safeStringify(payload),
            toEmail
        },
    })
}

export async function getNewsletterMessage(messageId: string) {
    return prisma.newsletterMessages.findFirst({
        where: {
            messageId,
        }
    })
}

export function saveNewsletterNotification(event: NotificationEvent) {
    return prisma.newsletterNotifications.create({
        data: {
            messageId: event.messageId,
            rawEvent: event.raw,
            type: event.type,
            notificationId: event.notificationId,
            timestamp: event.timestamp,
        },
    })
}

export async function getNewsletterContent(id: string) {
    const result = await prisma.newsletterBatch.findUnique({
        where: { id },
        select: { contents: true }
    })
    return result && result.contents ? JSON.parse(result.contents) : null
}

export async function saveSystemEmailEvent(event: NotificationEvent) {
    return prisma.newsletterNotifications.create({
        data: {
            messageId: event.messageId,
            rawEvent: event.raw,
            type: event.type,
            notificationId: event.notificationId,
            timestamp: event.timestamp,
        },
    })
}
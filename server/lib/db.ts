import { SendEmailRequest } from "@aws-sdk/client-sesv2"
import { PrismaClient } from "@prisma/client"
import { NotificationEvent } from "./utils"

export const prisma = new PrismaClient()

export async function createNewsletterBatchEntry(siteId, batchId, contents, fromEmail) {
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

export async function createNewsletterEntry(messageId, siteId, batchId, payload: SendEmailRequest) {
    const toEmail = payload.Destination?.ToAddresses?.join("") || ""
    return prisma.newslettersMessages.create({
        data: {
            siteId,
            batchId,
            contents: JSON.stringify(payload),
            toEmail,
            messageId,
        },
    })
}

export async function createNewsletterErrorEntry(message, siteId, batchId, payload: SendEmailRequest) {
    const toEmail = payload.Destination?.ToAddresses?.join("") || ""
    return prisma.newslettersErrors.create({
        data: {
            siteId,
            batchId,
            contents: JSON.stringify(payload),
            toEmail,
            message,
        },
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
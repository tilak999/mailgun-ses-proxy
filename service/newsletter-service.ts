import { preparePayload } from "../lib/core/aws-utils"
import { safeStringify } from "../lib/core/common"
import { SendEmailCommand, SendEmailRequest } from "@aws-sdk/client-sesv2"
import { DeleteMessageCommand, Message, SendMessageCommand } from "@aws-sdk/client-sqs"
import { createNewsletterBatchEntry, createNewsletterEntry, createNewsletterErrorEntry, getNewsletterContent } from "./database/db"
import { QUEUE_URL, sesNewsletterClient, sqsClient } from "./aws/awsHelper"
import logger from "../lib/core/logger"

const log = logger.child({ service: "service:newsletter-service" })

export async function addNewsletterToQueue(message: any, siteId: string, auth: any) {
    if (!message) throw new Error("Message body is empty or invalid.")
    log.debug({ message }, "sending message body to SQS")

    const result = await createNewsletterBatchEntry(siteId, message)
    const params = {
        QueueUrl: QUEUE_URL.NEWSLETTER,
        MessageBody: String(result.id),
        MessageAttributes: {
            siteId: {
                DataType: "String",
                StringValue: siteId,
            },
            from: {
                DataType: "String",
                StringValue: message.from,
            },
        },
    }
    const command = new SendMessageCommand(params)
    const response = await sqsClient().send(command)
    return { batchId: message["v:email-id"], messageId: response.MessageId }
}

async function sendSingleMail(request: SendEmailRequest, dbId: string, siteId: string, batchId: string) {
    try {
        const cmd = new SendEmailCommand(request)
        const resp = await sesNewsletterClient().send(cmd)
        const messageId = resp.MessageId as string
        await createNewsletterEntry(messageId, dbId, request)
        log.info({ messageId, siteId }, "email sent")
    } catch (e) {
        log.error(e, "error occurred at sendMail")
        await createNewsletterErrorEntry(String(e), siteId, batchId, request)
        return { errorMessage: e }
    }
}

async function sendMail(siteId: string, dbId: string) {
    const contents = await getNewsletterContent(dbId)
    const sendEmailRequests = preparePayload(contents, siteId)
    const batchId = contents["v:email-id"]
    
    // Rate limit: 20 calls per second
    const RATE_LIMIT = Number(process.env.RATE_LIMIT) || 20;
    const INTERVAL_MS = 1000;
    
    // Process requests in batches with rate limiting
    for (let i = 0; i < sendEmailRequests.length; i += RATE_LIMIT) {
        const batch = sendEmailRequests.slice(i, i + RATE_LIMIT)
        const promises = batch.map(request => sendSingleMail(request, dbId, siteId, batchId))
        
        // Wait for all requests in this batch to complete (allSettled ensures all attempts are made even if some fail)
        const results = await Promise.allSettled(promises)
        
        // Log batch summary for monitoring
        const successful = results.filter(r => r.status === 'fulfilled').length
        const failed = results.filter(r => r.status === 'rejected').length
        if (failed > 0) {
            log.warn({ successful, failed, batchId }, "Some emails failed in batch")
        }
        
        // Wait 1 second before processing the next batch (except for the last batch)
        if (i + RATE_LIMIT < sendEmailRequests.length) {
            await new Promise(resolve => setTimeout(resolve, INTERVAL_MS))
        }
    }
    
    return { batchId }
}

export async function validateAndSend(message: Message) {
    if (!message.MessageAttributes || !message.Body) {
        log.error({ message: safeStringify(message) }, "invalid message")
        return
    }

    const siteId = message.MessageAttributes["siteId"]?.StringValue
    const from = message.MessageAttributes["from"]?.StringValue

    if (!siteId || !from) {
        log.error({ message: safeStringify(message) }, "missing required message attributes")
        return
    }

    try {
        const receiveCount = parseInt(message.Attributes?.ApproximateReceiveCount || "0")
        if (receiveCount > 5) {
            await sqsClient().send(
                new DeleteMessageCommand({
                    QueueUrl: QUEUE_URL.NEWSLETTER,
                    ReceiptHandle: message.ReceiptHandle,
                })
            )
            throw new Error("Message has been received more than 5 times, skipping it.")
        }

        const result = await sendMail(siteId, message.Body)

        if (result.batchId) {
            await sqsClient().send(
                new DeleteMessageCommand({
                    QueueUrl: QUEUE_URL.NEWSLETTER,
                    ReceiptHandle: message.ReceiptHandle,
                })
            )
        }
    } catch (e) {
        log.error({ error: e, batchId: message.Body }, "error occurred at validateAndSend")
    }
}

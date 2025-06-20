import { preparePayload } from "../lib/utils"
import { safeStringify } from "../lib/common"
import { SendEmailCommand } from "@aws-sdk/client-sesv2"
import { DeleteMessageCommand, Message, SendMessageCommand } from "@aws-sdk/client-sqs"
import { createNewsletterBatchEntry, createNewsletterEntry, createNewsletterErrorEntry, getNewsletterContent } from "../lib/db"
import { QUEUE_URL, sesNewsletterClient, sqsClient } from "../lib/awsHelper"
import logger from "../lib/logger"

const log = logger.child({ service: "service:newsletter-service" })

export async function addNewsletterToQueue(message: any, siteId: string, auth: any) {
    if (!message) throw new Error("Message body is empty or invalid.")
    log.debug({ message }, "message body sent to SQS")

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

async function sendMail(siteId: string, dbId: string) {
    const contents = await getNewsletterContent(dbId)
    const sendEmailRequests = preparePayload(contents, siteId)
    const batchId = contents["v:email-id"]
    for (const requests of sendEmailRequests) {
        try {
            const cmd = new SendEmailCommand(requests)
            const resp = await sesNewsletterClient().send(cmd)
            const messageId = resp.MessageId as string
            await createNewsletterEntry(messageId, dbId, requests)
            log.info({ messageId, siteId }, "email sent")
        } catch (e) {
            log.error(e, "error occurred at sendMail")
            await createNewsletterErrorEntry(String(e), siteId, batchId, requests)
            return { errorMessage: e }
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

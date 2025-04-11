import { preparePayload } from "../lib/utils"
import { safeStringify } from "../lib/common"
import { SendEmailCommand } from "@aws-sdk/client-sesv2"
import { DeleteMessageCommand, Message, SendMessageCommand } from "@aws-sdk/client-sqs"
import { validateSiteId } from "./validate"
import { createNewsletterBatchEntry, createNewsletterEntry, createNewsletterErrorEntry } from "../lib/db"
import { QUEUE_URL, sesClient, sqsClient } from "../lib/awsHelper"
import logger from "../lib/logger"

const log = logger.child({ service: "service:newsletter-service" })

export async function addNewsletterToQueue(message: any, siteId: string, auth: any) {
    if (!message) {
        throw new Error("Message body is empty or invalid.")
    }
    const body = safeStringify(message)
    const params = {
        QueueUrl: QUEUE_URL.NEWSLETTER,
        MessageBody: body,
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
    const response = await sqsClient.send(command)
    await createNewsletterBatchEntry(siteId, message["v:email-id"], body, message.from)
    return { batchId: message["v:email-id"], messageId: response.MessageId }
}

async function sendMail(siteId: string, messageBody: string) {
    const body = JSON.parse(messageBody)
    const payloads = preparePayload(body, siteId)
    const batchId = body["v:email-id"]
    const promises = payloads.map(async (payload) => {
        try {
            const cmd = new SendEmailCommand(payload)
            const resp = await sesClient.send(cmd)
            const id = resp.MessageId as string
            await createNewsletterEntry(id, siteId, batchId, payload)
        } catch (e) {
            log.error("error occurred at sendMail", e)
            await createNewsletterErrorEntry(String(e), siteId, batchId, payload)
            return { errorMessage: e }
        }
    })
    await Promise.all(promises)
    return { batchId }
}

export async function validateAndSend(message: Message) {
    if (message.MessageAttributes && message.Body) {
        const siteId = message.MessageAttributes["siteId"].StringValue
        const from = message.MessageAttributes["from"].StringValue
        if (siteId && from) {
            try {
                await validateSiteId(siteId, from)
                const result = await sendMail(siteId, message.Body)
                if (result.batchId) {
                    const command = new DeleteMessageCommand({
                        QueueUrl: QUEUE_URL.NEWSLETTER,
                        ReceiptHandle: message.ReceiptHandle,
                    })
                    await sqsClient.send(command)
                }
            } catch (e) {
                log.error("error occurred at validateAndSend", e)
            }
        }
    } else {
        log.error("invalid message", safeStringify(message))
    }
}

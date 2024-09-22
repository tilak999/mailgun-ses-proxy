import { preparePayload } from "../lib/utils"
import { formatBody, safeStringify } from "../lib/common"
import { SendEmailCommand } from "@aws-sdk/client-sesv2"
import { DeleteMessageCommand, Message, SendMessageCommand } from "@aws-sdk/client-sqs"
import { GhostMailgunEmailObject } from "../type"
import { validateSiteId } from "./validate"
import { createNewsletterBatchEntry, createNewsletterEntry, createNewsletterErrorEntry } from "../lib/db"
import { QUEUE_URL, sesClient, sqsClient } from "../lib/awsHelper"

export async function addToNewsletterQueue(message: any, siteId: string) {
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
                StringValue: message.from.value,
            },
        },
    }
    const command = new SendMessageCommand(params)
    const response = await sqsClient.send(command)
    await createNewsletterBatchEntry(siteId, message["v:email-id"]["value"], body, message.from.value)
    return response
}

async function sendMail(siteId, messageBody) {
    const body = formatBody(messageBody) as GhostMailgunEmailObject
    const payloads = preparePayload(body, siteId)
    const batchId = body["v:email-id"]
    const promises = payloads.map(async (payload) => {
        try {
            const cmd = new SendEmailCommand(payload)
            const resp = await sesClient.send(cmd)
            const id = resp.MessageId
            createNewsletterEntry(id, siteId, batchId, payload)
        } catch (e) {
            createNewsletterErrorEntry(String(e), siteId, batchId, payload)
            return { errorMessage: e }
        }
    })
    await Promise.all(promises)
    return { batchId }
}

export async function validateAndSend(message: Message) {
    if (message.MessageAttributes) {
        const siteId = message.MessageAttributes["siteId"].StringValue
        const from = message.MessageAttributes["from"].StringValue
        await validateSiteId(siteId, from)
        const result = await sendMail(siteId, message.Body)
        if (result.batchId) {
            const command = new DeleteMessageCommand({
                QueueUrl: QUEUE_URL.NEWSLETTER,
                ReceiptHandle: message.ReceiptHandle,
            })
            await sqsClient.send(command)
        }
    }
}

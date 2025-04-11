import { DeleteMessageCommand, MessageSystemAttributeName, ReceiveMessageCommand, ReceiveMessageCommandOutput } from "@aws-sdk/client-sqs"
import { parseNotificationEvent } from "../lib/utils"
import { saveNewsletterNotification } from "../lib/db"
import { validateAndSend } from "./newsletter-service"
import { QUEUE_URL, sqsClient } from "../lib/awsHelper"
import logger from "../lib/logger"

const log = logger.child({ service: "service:backgroundProcess" })

export async function processNewsletterQueue() {
    const input = {
        MessageAttributeNames: ["All"],
        MessageSystemAttributeNames: [MessageSystemAttributeName.SentTimestamp],
        QueueUrl: QUEUE_URL.NEWSLETTER,
        VisibilityTimeout: 30,
        WaitTimeSeconds: 20,
    }
    const command = new ReceiveMessageCommand(input)
    while (true) {
        let response = await sqsClient.send(command)
        if (response.Messages) {
            const promise = response.Messages.map((msg) => validateAndSend(msg))
            await Promise.all(promise)
        }
    }
}

async function processEmailEvents(response: ReceiveMessageCommandOutput) {
    if (!response.Messages) throw new Error("No messages found")
    for (const msg of response.Messages) {
        if (msg.Body && msg.MessageId) {
            try {
                const result = parseNotificationEvent(msg.MessageId, msg.Body)
                await saveNewsletterNotification(result)
            } catch (e) {
                log.error(e)
            }
            const command = new DeleteMessageCommand({
                QueueUrl: QUEUE_URL.NOTIFICATION,
                ReceiptHandle: msg.ReceiptHandle,
            })
            await sqsClient.send(command)
        }
    }
}

export async function processEmailEventsQueue() {
    const input = {
        MessageAttributeNames: ["All"],
        MessageSystemAttributeNames: [MessageSystemAttributeName.SentTimestamp],
        QueueUrl: QUEUE_URL.NOTIFICATION,
        VisibilityTimeout: 30,
        WaitTimeSeconds: 20,
    }
    const command = new ReceiveMessageCommand(input)
    while (true) {
        let response = await sqsClient.send(command)
        if (response.Messages) await processEmailEvents(response)
    }
}

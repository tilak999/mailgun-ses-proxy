import { DeleteMessageCommand, MessageSystemAttributeName, ReceiveMessageCommand } from "@aws-sdk/client-sqs"
import { parseNotificationEvent } from "../lib/utils"
import { saveNewsletterNotification } from "../lib/db"
import { validateAndSend } from "./newsletterService"
import { QUEUE_URL, sqsClient } from "../lib/awsHelper"
import { logger } from "../lib/common"

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

export async function processEvents() {
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
        if (response.Messages) {
            for (const msg of response.Messages) {
                if (msg.Body) {
                    try {
                        const result = parseNotificationEvent(msg.Body)
                        await saveNewsletterNotification(result)
                    } catch (e) {
                        logger(JSON.stringify(e))
                    }
                    const command = new DeleteMessageCommand({
                        QueueUrl: QUEUE_URL.NOTIFICATION,
                        ReceiptHandle: msg.ReceiptHandle,
                    })
                    await sqsClient.send(command)
                }
            }
        }
    }
}

import { DeleteMessageCommand, ReceiveMessageCommandOutput } from "@aws-sdk/client-sqs"
import { parseNotificationEvent } from "../../lib/core/aws-utils"
import logger from "../../lib/core/logger"
import { QUEUE_URL, sqsClient } from "../aws/awsHelper"
import { getNewsletterMessage, saveNewsletterNotification } from "../database/db"

const log = logger.child({ service: "processEmailEvents" })

export async function processNewsletterEmailEvents(response: ReceiveMessageCommandOutput) {
    if (!response.Messages || response.Messages.length == 0)
        throw new Error("No messages found")
    for (const msg of response.Messages) {
        if (msg.Body && msg.MessageId) {
            try {
                const result = parseNotificationEvent(msg.MessageId, msg.Body)
                const message = await getNewsletterMessage(msg.MessageId)
                if (message) {
                    await saveNewsletterNotification(result)
                }
                const command = new DeleteMessageCommand({
                    QueueUrl: QUEUE_URL.NEWSLETTER_NOTIFICATION,
                    ReceiptHandle: msg.ReceiptHandle,
                })
                await sqsClient().send(command)
            } catch (e) {
                log.error(e, `[processNewsletterEmailEvents] Failed to process message ${msg.MessageId}`)
            }
        }
    }
}
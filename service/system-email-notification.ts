import { QUEUE_URL, sqsClient } from "./aws/awsHelper"
import { saveSystemEmailEvent, getSystemMessage } from "./database/db"
import logger from "../lib/core/logger"
import { parseNotificationEvent } from "../lib/core/aws-utils"
import { DeleteMessageCommand, ReceiveMessageCommandOutput } from "@aws-sdk/client-sqs"

const log = logger.child({ service: "processSystemEmailEvents" })
export async function processSystemEmailEvents(response: ReceiveMessageCommandOutput) {
    if (!response.Messages || response.Messages.length == 0)
        throw new Error("No messages found")
    for (const msg of response.Messages) {
        if (msg.Body && msg.MessageId) {
            try {
                const result = parseNotificationEvent(msg.MessageId, msg.Body)
                const message = await getSystemMessage(result.messageId)
                if (!message) {
                    throw new Error(`System Message ${result.messageId} not found in DB, skipping deletion to retry later`)
                }
                await saveSystemEmailEvent(result)
                const command = new DeleteMessageCommand({
                    QueueUrl: QUEUE_URL.SYSTEM_NOTIFICATION,
                    ReceiptHandle: msg.ReceiptHandle,
                })
                await sqsClient().send(command)
            } catch (e) {
                log.error(e, `[processSystemEmailEvents] Failed to process message ${msg.MessageId}`)
            }
        }
    }
}
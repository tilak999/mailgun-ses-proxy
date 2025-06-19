import { QUEUE_URL, sqsTransactionalClient } from "@/lib/awsHelper"
import { saveSystemEmailEvent } from "@/lib/db"
import logger from "@/lib/logger"
import { parseNotificationEvent } from "@/lib/utils"
import { DeleteMessageCommand, ReceiveMessageCommandOutput } from "@aws-sdk/client-sqs"

export async function processSystemEmailEvents(response: ReceiveMessageCommandOutput) {
    const log = logger.child({ service: "processSystemEmailEvents" })
    if (!response.Messages || response.Messages.length == 0)
        throw new Error("No messages found")
    for (const msg of response.Messages) {
        if (msg.Body && msg.MessageId) {
            try {
                const result = parseNotificationEvent(msg.MessageId, msg.Body)
                await saveSystemEmailEvent(result)
            } catch (e) {
                log.error(e)
            }
            const command = new DeleteMessageCommand({
                QueueUrl: QUEUE_URL.SYSTEM_NOTIFICATION,
                ReceiptHandle: msg.ReceiptHandle,
            })
            await sqsTransactionalClient.send(command)
        }
    }
}
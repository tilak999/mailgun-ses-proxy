import { MessageSystemAttributeName, ReceiveMessageCommand } from "@aws-sdk/client-sqs"
import { validateAndSend } from "./newsletter-service"
import { QUEUE_URL, sqsTransactionalClient } from "../lib/awsHelper"
import logger from "../lib/logger"
import { processNewsletterEmailEvents } from "./email-event-service"
import { processSystemEmailEvents } from "./system-email-notification"

const log = logger.child({ service: "backgroundProcess" })

/**
 *  This method process all the newsletter messages in the queue
 */
export async function processNewsletterQueue() {
    log.info("[processNewsletterQueue] Processing newsletter queue")
    const input = {
        MessageAttributeNames: ["All"],
        MessageSystemAttributeNames: [MessageSystemAttributeName.SentTimestamp,
        MessageSystemAttributeName.ApproximateReceiveCount],
        QueueUrl: QUEUE_URL.NEWSLETTER,
        VisibilityTimeout: 30,
        WaitTimeSeconds: 20,
    }
    const command = new ReceiveMessageCommand(input)
    while (true) {
        let { Messages } = await sqsTransactionalClient.send(command)
        if (Messages && Messages.length > 0) {
            for (const message of Messages) {
                await validateAndSend(message)
            }
        } else {
            log.error("AWS SQS Message is empty")
        }
    }
}

/**
 * This process newsletter email events
 */
export async function processNewsletterEventsQueue() {
    log.info("[background] Processing newsletter events queue")
    const input = {
        MessageAttributeNames: ["All"],
        MessageSystemAttributeNames: [MessageSystemAttributeName.SentTimestamp],
        QueueUrl: QUEUE_URL.NEWSLETTER_NOTIFICATION,
        VisibilityTimeout: 30,
        WaitTimeSeconds: 20,
    }
    const command = new ReceiveMessageCommand(input)
    while (true) {
        let response = await sqsTransactionalClient.send(command)
        if (response.Messages) await processNewsletterEmailEvents(response)
    }
}

/**
 * This process system email events
 */
export async function processSystemEventsQueue() {
    log.info("[background] Processing system events queue")
    const input = {
        MessageAttributeNames: ["All"],
        MessageSystemAttributeNames: [MessageSystemAttributeName.SentTimestamp],
        QueueUrl: QUEUE_URL.SYSTEM_NOTIFICATION,
        VisibilityTimeout: 30,
        WaitTimeSeconds: 20,
    }
    const command = new ReceiveMessageCommand(input)
    while (true) {
        let response = await sqsTransactionalClient.send(command)
        if (response.Messages) await processSystemEmailEvents(response)
    }
}

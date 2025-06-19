import { SESv2Client } from "@aws-sdk/client-sesv2"
import { SQSClient } from "@aws-sdk/client-sqs"

export const QUEUE_URL = {
    NEWSLETTER: process.env.NEWSLETTER_QUEUE,
    NEWSLETTER_NOTIFICATION: process.env.NEWSLETTER_NOTIFICATION_QUEUE,
    SYSTEM_NOTIFICATION: process.env.TRANSACTIONAL_NOTIFICATION_QUEUE
}

export const sesTransactionalClient = new SESv2Client({ region: process.env.TRANSACTIONAL_REGION })
export const sqsTransactionalClient = new SQSClient({ region: process.env.TRANSACTIONAL_REGION })

export const sesNewsletterClient = new SESv2Client({ region: process.env.NEWSLETTER_REGION })
export const sqsNewsletterClient = new SQSClient({ region: process.env.NEWSLETTER_REGION })

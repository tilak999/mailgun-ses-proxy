import { SESv2Client } from "@aws-sdk/client-sesv2"
import { SQSClient } from "@aws-sdk/client-sqs"

export const QUEUE_URL = {
    NEWSLETTER: process.env.NEWSLETTER_SQS_QUEUE_URL,
    NOTIFICATION: process.env.NOTIFICATION_SQS_QUEUE_URL,
}

export const sesClient = new SESv2Client({ region: process.env.AWS_DEFAULT_REGION })
export const sqsClient = new SQSClient({ region: process.env.AWS_DEFAULT_REGION })

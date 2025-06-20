import { SESv2Client } from "@aws-sdk/client-sesv2"
import { SQSClient } from "@aws-sdk/client-sqs"

export const QUEUE_URL = {
    NEWSLETTER: process.env.NEWSLETTER_QUEUE,
    NEWSLETTER_NOTIFICATION: process.env.NEWSLETTER_NOTIFICATION_QUEUE,
    SYSTEM_NOTIFICATION: process.env.TRANSACTIONAL_NOTIFICATION_QUEUE
}

const regions = (process.env.SES_REGION || "").split(",").map(s => s.trim())

export function sesNewsletterClient() {
    if (!process.env.SES_REGION) throw "env variable SES_REGION not found"
    const region = regions[Math.floor(Math.random() * regions.length)];
    const client = new SESv2Client({ region })
    return client
}

export const sesSystemClient = () => {
    const region = process.env.SES_TRANSACTIONAL_REGION || regions[0]
    if (!region) throw "env SES_TRANSACTIONAL_REGION is not defined" 
    return new SESv2Client({ region })
}

export const sqsClient = () => {
    const region = process.env.SQS_REGION
    if (!region) throw "env SQS_REGION is not defined"
    return new SQSClient({ region })
}

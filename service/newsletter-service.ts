import { preparePayload } from "../lib/core/aws-utils"
import { safeStringify } from "../lib/core/common"
import { SendEmailCommand, SendEmailRequest } from "@aws-sdk/client-sesv2"
import { DeleteMessageCommand, Message, SendMessageCommand } from "@aws-sdk/client-sqs"
import { createNewsletterBatchEntry, createNewsletterEntry, createNewsletterErrorEntry, getNewsletterContent } from "./database/db"
import { QUEUE_URL, sesNewsletterClient, sqsClient } from "./aws/awsHelper"
import logger from "../lib/core/logger"
import { createQueue } from "./utils/queue"

const log = logger.child({ service: "service:newsletter-service" })

export async function addNewsletterToQueue(message: any, siteId: string, auth: any) {
    if (!message) throw new Error("Message body is empty or invalid.")
    log.debug({ message }, "sending message body to SQS")

    const result = await createNewsletterBatchEntry(siteId, message)
    const params = {
        QueueUrl: QUEUE_URL.NEWSLETTER,
        MessageBody: String(result.id),
        MessageAttributes: {
            siteId: {
                DataType: "String",
                StringValue: siteId,
            },
            from: {
                DataType: "String",
                StringValue: message.from,
            },
        },
    }
    const command = new SendMessageCommand(params)
    const response = await sqsClient().send(command)
    return { batchId: message["v:email-id"], messageId: response.MessageId }
}

async function sendSingleMail(request: SendEmailRequest, dbId: string, siteId: string, batchId: string) {
    try {
        const cmd = new SendEmailCommand(request)
        const resp = await sesNewsletterClient().send(cmd)
        const messageId = resp.MessageId as string
        await createNewsletterEntry(messageId, dbId, request)
        log.info({ messageId, siteId }, "email sent")
    } catch (e) {
        log.error(e, "error occurred at sendMail")
        await createNewsletterErrorEntry(String(e), siteId, batchId, request)
        return { errorMessage: e }
    }
}

async function sendMail(siteId: string, dbId: string) {
    const contents = await getNewsletterContent(dbId)
    const sendEmailRequests = preparePayload(contents, siteId)
    const batchId = contents["v:email-id"]
    
    const RATE_LIMIT = Number(process.env.RATE_LIMIT) || 20;

    const q = createQueue({rateLimit: RATE_LIMIT});
    
    // Process requests with rate limiting
    sendEmailRequests.forEach(req => {
        q.addToQueue(
            () => sendSingleMail(req, dbId, siteId, batchId),
            req.Destination.ToAddresses.join(',')
        );
    });

    const results = await new Promise((resolve) => {
      q.onFinish((stats) => resolve(stats));
    });
    console.log('Finished queue', results);
    
    return { batchId }
}

export async function validateAndSend(message: Message) {
    if (!message.MessageAttributes || !message.Body) {
        log.error({ message: safeStringify(message) }, "invalid message")
        return
    }

    const siteId = message.MessageAttributes["siteId"]?.StringValue
    const from = message.MessageAttributes["from"]?.StringValue

    if (!siteId || !from) {
        log.error({ message: safeStringify(message) }, "missing required message attributes")
        return
    }

    try {
        const receiveCount = parseInt(message.Attributes?.ApproximateReceiveCount || "0")
        if (receiveCount > 5) {
            await sqsClient().send(
                new DeleteMessageCommand({
                    QueueUrl: QUEUE_URL.NEWSLETTER,
                    ReceiptHandle: message.ReceiptHandle,
                })
            )
            throw new Error("Message has been received more than 5 times, skipping it.")
        }

        const result = await sendMail(siteId, message.Body)

        if (result.batchId) {
            await sqsClient().send(
                new DeleteMessageCommand({
                    QueueUrl: QUEUE_URL.NEWSLETTER,
                    ReceiptHandle: message.ReceiptHandle,
                })
            )
        }
    } catch (e) {
        log.error({ error: e, batchId: message.Body }, "error occurred at validateAndSend")
    }
}

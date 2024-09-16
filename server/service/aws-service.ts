import { FastifyRequest } from "fastify"
import { preparePayload } from "../lib/mail-utils"
import { formatBody } from "../lib/common"
import { SendEmailCommand, SESv2Client } from "@aws-sdk/client-sesv2"
import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";
import { GhostMailgunEmailObject } from "../type";

const sesClient = new SESv2Client();
const sqsClient = new SQSClient();

const SQS_QUEUE_URL = process.env.SQS_QUEUE_URL;

export function addToNewsletterQueue() {
    const command = new SendMessageCommand({
        QueueUrl: SQS_QUEUE_URL,
        MessageBody:
    });

    //const response = await client.send(command);
}

export function sendMail(req: FastifyRequest) {
    const payloads = preparePayload(formatBody(req.body) as GhostMailgunEmailObject)
    const promises = payloads.map((payload) => {
        const cmd = new SendEmailCommand(payload)
        return sesClient.send(cmd)
    })
    return Promise.all(promises)
}

export function fetchEvents(req) {
    return {
        "items": [
            {
                "event": "opened",
                "id": "-laxIqj9QWubsjY_3pTq_g",
                "timestamp": 1726212700.959,
                "log-level": "info",
                "recipient": "test01@local.host",
                "recipient-provider": "Gmail",
                "geolocation": {
                    "country": "US",
                    "region": "Texas",
                    "city": "Austin"
                },
                "tags": [],
                "campaigns": [],
                "user-variables": {},
                "ip": "111.111.111.111",
                "client-info": {
                    "client-type": "mobile browser",
                    "client-os": "iOS",
                    "device-type": "mobile",
                    "client-name": "Mobile Safari",
                    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 6_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10B143",
                    "bot": ""
                },
                "message": {
                    "headers": {
                        "message-id": "66e7eeaa05affb7a491eb0c7"
                    }
                }
            }
        ],
        "paging": {

        }
    }
}

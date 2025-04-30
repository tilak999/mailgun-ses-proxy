import { SendEmailCommand } from "@aws-sdk/client-sesv2"
import { sesClient } from "../lib/awsHelper"
import { EmailPayload } from "@/types/default"

export async function sendSystemMail(email: EmailPayload) {
    const input = {
        ConfigurationSetName: process.env.AWS_TRANSACTIONAL_CONFIGURATION_SET_NAME,
        FromEmailAddress: email.from,
        Destination: {
            ToAddresses: email.to,
        },
        ReplyToAddresses: [email.replyTo],
        FeedbackForwardingEmailAddress: email.replyTo || email.from,
        Content: {
            Simple: {
                Subject: {
                    Data: email.subject,
                },
                Body: {
                    Html: {
                        Data: email.html,
                    },
                },
            },
        },
    }
    const cmd = new SendEmailCommand(input)
    const resp = await sesClient.send(cmd)
    return { id: resp.MessageId }
}


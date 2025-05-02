import { SendEmailCommand } from "@aws-sdk/client-sesv2"
import { sesClient } from "../lib/awsHelper"
import { EmailPayload } from "@/types/default"
import logger from "@/lib/logger"
import { prisma } from "@/lib/db"

const log = logger.child({ service: "service:transactional-email-service" })

function formatEmail(email: EmailPayload) {
    return {
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
}


export async function sendSystemMail(email: EmailPayload) {
    if (!email.to) {
        throw new Error("Email to address is required")
    }

    const { id } = await prisma.systemMails.create({
        select: { id: true },
        data: {
            toEmail: email.to.join(","),
            fromEmail: email.from,
            subject: email.subject,
            contents: email.html,
        }
    })

    const cmd = new SendEmailCommand(formatEmail(email))
    const resp = await sesClient.send(cmd)

    if (resp.MessageId) {
        await prisma.systemMails.update({ data: { messageId: resp.MessageId, status: "sent" }, where: { id } })
        log.info({ resp, to: email.to }, "sending system mail, SES response")
        return { id: resp.MessageId }
    }

    log.error({ resp, to: email.to }, "failed to send system mail")
    throw new Error("Failed to send email");
}


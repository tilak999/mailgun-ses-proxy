import { SendEmailCommand } from "@aws-sdk/client-sesv2"
import { sesNewsletterClient, sesSystemClient } from "./aws/awsHelper"
import { EmailPayload } from "@/types/default"
import logger from "@/lib/core/logger"
import { prisma } from "@/service/database/db"

const log = logger.child({ service: "service:transactional-email-service" })

function formatEmail(email: EmailPayload) {
    if (!process.env.TRANSACTIONAL_CONFIGURATION_SET_NAME)
        throw "env variable TRANSACTIONAL_CONFIGURATION_SET_NAME is not defined"
    return {
        ConfigurationSetName: process.env.TRANSACTIONAL_CONFIGURATION_SET_NAME,
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
    if (!email.to) throw new Error("Email to address is required")

    const cmd = new SendEmailCommand(formatEmail(email))
    const resp = await sesSystemClient().send(cmd)

    if (resp.MessageId) {
        const { id } = await prisma.systemMails.create({
            select: { id: true },
            data: {
                messageId: resp.MessageId,
                toEmail: email.to.join(","),
                fromEmail: email.from,
                subject: email.subject,
                contents: email.html,
            }
        })
        log.info({ resp, to: email.to }, "sending system mail, SES response")
        return { messageId: resp.MessageId, dbId: id }
    }

    log.error({ resp, email }, "failed to send system mail")
    throw new Error("Failed to send email");
}


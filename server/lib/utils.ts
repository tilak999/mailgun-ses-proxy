import { SendEmailRequest } from "@aws-sdk/client-sesv2"
import { GhostMailgunEmailObject, MailgunEvents, MailgunRecipientVariables } from "../../types/type"
import { replaceAll } from "./common"
import { NewsletterNotifications, NewslettersMessages } from "@prisma/client"

function doSubstitution(inputText: string, substitutions: MailgunRecipientVariables[0]) {
    for (const key of Object.keys(substitutions)) {
        inputText = replaceAll(
            inputText,
            `%recipient.${key}%`,
            substitutions[key as keyof MailgunRecipientVariables[0]]
        )
    }
    return inputText
}

export function preparePayload(input: GhostMailgunEmailObject, siteId: string): SendEmailRequest[] {
    const recepientVariables = JSON.parse(input["recipient-variables"]) as MailgunRecipientVariables
    const receivers = Array.isArray(input.to) ? input.to : [input.to]
    const result = receivers.map((receiverEmail) => ({
        FromEmailAddress: input.from,
        Destination: { ToAddresses: [receiverEmail] },
        ReplyToAddresses: [input["h:Reply-To"]],
        Content: {
            Simple: {
                Subject: {
                    Data: input.subject,
                },
                Body: {
                    Text: {
                        Data: doSubstitution(input.text, recepientVariables[receiverEmail]),
                    },
                    Html: {
                        Data: doSubstitution(input.html, recepientVariables[receiverEmail]),
                    },
                },
                Headers: [
                    {
                        Name: "List-Unsubscribe-Post",
                        Value: "List-Unsubscribe=One-Click",
                    },
                    {
                        Name: "List-Unsubscribe",
                        Value: `<${recepientVariables[receiverEmail].unsubscribe_url}>`,
                    },
                ],
            },
        },
        EmailTags: [
            {
                Name: "siteId",
                Value: siteId,
            },
            {
                Name: "batchId",
                Value: input["v:email-id"],
            },
            {
                Name: "ghost-email",
                Value: "true",
            },
        ],
        ConfigurationSetName: process.env.AWS_NEWSLETTER_CONFIGURATION_SET_NAME,
    }))
    return result
}

const awsToMailgunType = {
    Reject: "Rejected",
    Bounce: "Failed",
    // None: "Stored", <- not aws type
    Complaint: "Complained",
    Subscription: "Unsubscribed",
    Click: "Clicked",
    Open: "Opened",
    RenderingFailure: "Rejected",
    Delivery: "Delivered",
    Send: "Accepted",
}

export interface NotificationEvent {
    notificationId: string
    type: string
    messageId: string
    timestamp: Date
    raw: any
}

export function parseNotificationEvent(inputEvent: string): NotificationEvent {
    const notif = JSON.parse(inputEvent)
    if (notif.Type !== "Notification") throw new Error("Unknown event: " + notif.Type)
    const event = JSON.parse(notif.Message) as {
        eventType: keyof typeof awsToMailgunType
        mail: { messageId: string }
        open?: { timestamp: Date }
    }
    return {
        notificationId: notif.MessageId,
        type: String(awsToMailgunType[event.eventType]).toLocaleLowerCase(),
        messageId: event.mail.messageId,
        timestamp: event.open?.timestamp || new Date(),
        raw: notif.Message,
    }
}

interface PayloadType extends NewsletterNotifications {
    messageId: string
    newsletter: NewslettersMessages
}

export function formatAsMailgunEvent(event: PayloadType[], url: string) {
    const format = (event: PayloadType) => {
        const eventTimestamp = (event.timestamp || event.created).getTime()
        const originalSESEvent = JSON.parse(event.rawEvent)
        const out = {
            event: event.type,
            id: `${event.id}-${event.messageId}`,
            timestamp: Math.floor(eventTimestamp / 1000),
            recipient: event.newsletter.toEmail,
            message: {
                headers: {
                    "message-id": event.newsletter.batchId,
                },
            },
        } as MailgunEvents

        if (originalSESEvent.eventType == "Bounce") {
            out["severity"] = "permanent"
            out["reason"] = "suppress-bounce"
        }

        return out
    }

    return {
        items: event.map(format),
        paging: { next: url },
    }
}

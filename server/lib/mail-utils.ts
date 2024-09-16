import { SendEmailRequest } from "@aws-sdk/client-sesv2";
import { GhostMailgunEmailObject, MailgunRecipientVariables } from "../type";
import { replaceAll } from "./common";

function doSubstitution(inputText: string, substitutions: MailgunRecipientVariables[0]) {
    for (const key of Object.keys(substitutions)) {
        inputText = replaceAll(inputText, `%recipient.${key}%`, substitutions[key])
    }
    return inputText
}

export function preparePayload(input: GhostMailgunEmailObject): SendEmailRequest[] {
    const recepientVariables = (JSON.parse(input["recipient-variables"]) as MailgunRecipientVariables)
    const receivers = Array.isArray(input.to) ? input.to : [input.to]
    const result = receivers.map(receiverEmail => ({
        FromEmailAddress: input.from,
        Destination: { ToAddresses: [receiverEmail] },
        ReplyToAddresses: [input["h:Reply-To"]],
        Content: { // EmailContent
            Simple: { // Message
                Subject: { // Content
                    Data: input.subject, // required
                },
                Body: { // Body
                    Text: {
                        Data: doSubstitution(input.text, recepientVariables[receiverEmail]), // required
                    },
                    Html: {
                        Data: doSubstitution(input.html, recepientVariables[receiverEmail]), // required
                    },
                },
                Headers: [ // MessageHeaderList
                    {
                        Name: "List-Unsubscribe-Post",
                        Value: "List-Unsubscribe=One-Click",
                    },
                    {
                        Name: "List-Unsubscribe",
                        Value: `<${recepientVariables[receiverEmail].unsubscribe_url}>`,
                    }
                ],
            }
        },
        EmailTags: [
            {
                Name: "bulk-email",
                Value: "true", // required
            },
            {
                Name: "ghost-email",
                Value: "true"
            }
        ],
        ConfigurationSetName: process.env.AWS_CONFIGURATION_SET_NAME,
    }))
    return result
}
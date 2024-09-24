export interface GhostMailgunEmailObject {
    to: string[]
    from: string //"\"The Ghosted\" <test@example.com>",
    "h:Reply-To": string //"\"The Ghosted\" <test@example.com>",
    subject: string
    html: string
    text: string
    "recipient-variables": string // "{\"test02@local.host\":{\"uuid\":\"a5258838-a7fc-457c-8477-ce5d232c7405\",\"unsubscribe_url\":\"http://localhost:2368/unsubscribe/?uuid=a5258838-a7fc-457c-8477-ce5d232c7405&key=e7aea29339257bd99f840c114ffb07910c0ae8e9c08a49f0eeef01aa9d442ef3&newsletter=3ac751d0-3b73-4159-8404-155afdfb784a\",\"list_unsubscribe\":\"http://localhost:2368/unsubscribe/?uuid=a5258838-a7fc-457c-8477-ce5d232c7405&key=e7aea29339257bd99f840c114ffb07910c0ae8e9c08a49f0eeef01aa9d442ef3&newsletter=3ac751d0-3b73-4159-8404-155afdfb784a\"},\"test01@local.host\":{\"uuid\":\"d8048849-c2ec-432a-a5e0-6f3884396f42\",\"unsubscribe_url\":\"http://localhost:2368/unsubscribe/?uuid=d8048849-c2ec-432a-a5e0-6f3884396f42&key=d0419b01037ea6709fa367a44e7f8ae3d14d76ca1204a14e9f3624c360e66077&newsletter=3ac751d0-3b73-4159-8404-155afdfb784a\",\"list_unsubscribe\":\"http://localhost:2368/unsubscribe/?uuid=d8048849-c2ec-432a-a5e0-6f3884396f42&key=d0419b01037ea6709fa367a44e7f8ae3d14d76ca1204a14e9f3624c360e66077&newsletter=3ac751d0-3b73-4159-8404-155afdfb784a\"},\"tilak.sasmal@email.local\":{\"uuid\":\"52241cbe-291d-4d5b-8f32-dee28448dfc4\",\"unsubscribe_url\":\"http://localhost:2368/unsubscribe/?uuid=52241cbe-291d-4d5b-8f32-dee28448dfc4&key=fee0f27484ab2f180d65fd3cdcb91213f8d7ef42fbd0878a7dd2574bd9e08a1d&newsletter=3ac751d0-3b73-4159-8404-155afdfb784a\",\"list_unsubscribe\":\"http://localhost:2368/unsubscribe/?uuid=52241cbe-291d-4d5b-8f32-dee28448dfc4&key=fee0f27484ab2f180d65fd3cdcb91213f8d7ef42fbd0878a7dd2574bd9e08a1d&newsletter=3ac751d0-3b73-4159-8404-155afdfb784a\"}}",
    "h:List-Unsubscribe": string // "<%recipient.list_unsubscribe%>, <%tag_unsubscribe_email%>",
    "h:List-Unsubscribe-Post": string // "List-Unsubscribe=One-Click",
    "v:email-id": string // "66e7d6cb05affb7a491eb09e",
    "o:tag": string[] // [ "bulk-email", "ghost-email"]
}

export interface MailgunRecipientVariables {
    [key: string]: {
        uuid: string
        unsubscribe_url: string
        list_unsubscribe: string
    }
}

export interface EventsQueryParams {
    start: string
    limit: string
    event: string
    tags: string
    begin: number
    end: number
    ascending: boolean
}

export interface MailgunEvents {
    event: string
    id: string
    timestamp: number
    recipient: string
    severity?: string
    reason?: string
    message: {
        headers: {
            "message-id": string
        }
    }
}

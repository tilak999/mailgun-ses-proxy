
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

export interface AuthPayload {
    limit: {
        newsletter: number
        startDate: Date
        endDate: Date
    }
}
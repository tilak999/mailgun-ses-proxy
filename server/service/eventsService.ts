import { prisma } from "../lib/db"
import { formatAsMailgunEvent } from "../lib/utils"

interface EventsProps {
    siteId: string
    type: string
    begin: number
    end: number
    order: "asc" | "desc"
    start: number
    limit: number
    url: string
}

function upsertStartParam(url: string, startVal: number) {
    url = url.slice(0, url.lastIndexOf("?"))
    const urlObject = new URL(`${url}/next`)
    const params = new URLSearchParams()
    params.set("start", String(startVal))
    urlObject.search = params.toString()
    return urlObject.toString()
}

export async function getEvents(params: EventsProps) {
    let skip = params.start || 0
    let take = params.limit || 300

    let type = [params.type]
    if (params.type.includes("OR")) {
        type = params.type.split("OR").map((s) => s.trim().toLocaleLowerCase())
    }

    const range = { gt: new Date(params.begin * 1000), lt: new Date(params.end * 1000) }

    const result = await prisma.newsletterNotifications.findMany({
        skip: skip,
        take: take,
        orderBy: { id: params.order },
        include: { newsletter: true },
        where: {
            type: { in: type },
            newsletter: { siteId: params.siteId },
            timestamp: range,
        },
    })

    const next = upsertStartParam(params.url, skip + take)
    const output = await formatAsMailgunEvent(result, next)
    return output
}

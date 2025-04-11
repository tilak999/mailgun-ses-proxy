export function formatBody(body: string | any) {
    body = typeof body === "string" ? JSON.parse(body) : body
    return Object.fromEntries(Object.keys(body).map((k: string) => [k, processVal(body[k])]))
}

function processVal(val: { value: string }[] | { value: string }) {
    if (val instanceof Array) {
        return val.map((o) => o.value)
    } else {
        return val.value
    }
}

export function replaceAll(str: string, find: string, replace: string) {
    const escapeRegExp = (str: string) => {
        return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") // $& means the whole matched string
    }
    return str.replace(new RegExp(escapeRegExp(find), "g"), replace)
}

// safely handles circular references
export function safeStringify(obj: any, indent = 2) {
    let cache = Array<any>()
    const retVal = JSON.stringify(
        obj,
        (_, value) =>
            typeof value === "object" && value !== null
                ? cache.includes(value)
                    ? undefined // Duplicate reference found, discard key
                    : cache.push(value) && value // Store value in our collection
                : value,
        indent
    )
    return retVal
}

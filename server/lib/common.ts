export function formatBody(body) {
    return Object.fromEntries(
        Object.keys(body).map(k => [k, processVal(body[k])])
    )
}

function processVal(val) {
    if (val instanceof Array) {
        return val.map(o => o.value)
    } else {
        return val.value
    }
}

export function replaceAll(str, find, replace) {
    const escapeRegExp = (str) => {
        return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
    }
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
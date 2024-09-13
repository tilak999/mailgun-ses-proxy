export default function formatBody(body) {
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
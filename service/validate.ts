export async function validateSiteId(siteId: string, from: string) {
    if (process.env.VALIDATE_SITEID_SENDER_FIELDS) {
        const rawResponse = await fetch(process.env.VALIDATE_SITEID_SENDER_FIELDS, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ from, siteId }),
        })

        if (!rawResponse.ok)
            throw new Error(
                `validateSiteId method failed: url=${process.env.VALIDATE_SITEID_SENDER_FIELDS}, siteId=${siteId}, from=${from}`
            )
    }
}

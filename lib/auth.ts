/*
import fetch from "node-fetch"

export function withAuth(controllerFunc: Function) {
    return async (req: FastifyRequest, reply: FastifyReply) => {
        if (req.headers.authorization && process.env.AUTH_URL) {
            const authString = req.headers.authorization
            const { siteId } = req.params as { siteId: string }
            try {
                const auth = await validateAuth(authString, siteId)
                return controllerFunc(req, reply, auth)
            } catch {
                reply.code(401).send({ error: "401 Unauthorized" })
            }
        } else {
            throw new Error("Missing: AUTH_URL or authorization header")
        }
    }
}

async function validateAuth(credentails: string, siteId: string) {
    let apiKey = credentails.split(" ")[1]
    if (credentails.startsWith("Basic")) {
        apiKey = atob(credentails.split(" ")[1]).split(":")[1]
    }
    const rawResponse = await fetch(process.env.AUTH_URL || "", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ apiKey, siteId }),
    })
    if (!rawResponse.ok) throw new Error("Auth failed")
    return rawResponse.json()
}
*/
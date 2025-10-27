import logger from "@/lib/core/logger";

const log = logger.child({ path: "service/authenticate" })

export async function authentication(token: string) {
    try {
        const raw = Buffer.from(token.split(" ")[1], "base64").toString("utf-8")
        const validKey = "api:" + process.env.API_KEY
        if (raw === validKey) {
            return true;
        }
    } catch (error) {
        log.error({ error }, "Error in authentication")
    }
    return false
}
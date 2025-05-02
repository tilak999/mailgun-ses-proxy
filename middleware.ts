import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware to check for a valid API key in the request headers
 * @param request - The incoming request
 * @returns NextResponse - The response object
 */

const whitelist = [
    "/healthcheck",
]

export function middleware(request: NextRequest) {
    if (whitelist.some((path) => request.nextUrl.pathname.startsWith(path))) {
        return NextResponse.next();
    }
    const token = request.headers.get("authorization")
    if (token) {
        const raw = Buffer.from(token.split(" ")[1], "base64").toString("utf-8")
        if (raw !== "api:" + process.env.API_KEY) {
            console.error(`Invalid API key: ${token}`)
            return NextResponse.json({ error: "Invalid API key" }, { status: 401 });
        }
        return NextResponse.next();
    }
    console.error("API key not found")
    return NextResponse.json({ error: "API key missing" }, { status: 401 });
}

// Match all routes
export const config = {
    matcher: "/:path((?!.*\\.(?:css|js|png|jpg|jpeg|gif|webp|svg|ico)).*)",
}
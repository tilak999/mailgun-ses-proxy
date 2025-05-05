import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authentication } from "./service/authenticate";

/**
 * Middleware to check for a valid API key in the request headers
 * @param request - The incoming request
 * @returns NextResponse - The response object
 */

const whitelist = [
    "/healthcheck",
]

export async function middleware(request: NextRequest) {
    if (whitelist.some((path) => request.nextUrl.pathname.startsWith(path))) {
        return NextResponse.next();
    }
    const token = request.headers.get("authorization")
    if (token) {
        const result = await authentication(token)
        if (result) {
            return NextResponse.next();
        }
    }
    console.error("API key not found")
    return Response.json({ error: 'authentication failed' }, { status: 401 })
}

// Match all routes
export const config = {
    matcher: "/:path((?!.*\\.(?:css|js|png|jpg|jpeg|gif|webp|svg|ico)).*)",
}
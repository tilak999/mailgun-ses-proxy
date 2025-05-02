import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // Redirect to /admin if accessing the root URL
    if (request.nextUrl.pathname === "/") {
        return NextResponse.redirect(new URL("/admin", request.url));
    } else if (request.nextUrl.pathname === "/admin") {
        // check if  cf tunnel jwt is valid
        return NextResponse.next();
    } else {
        const token = request.headers.get("authorization")
        if (token) {
            const raw = Buffer.from(token.split(" ")[1], "base64").toString("utf-8")
            if (raw !== process.env.API_KEY) {
                console.error(`Invalid API key: ${token}`)
                return NextResponse.json({ error: "Invalid API key" }, { status: 401 });
            }
            return NextResponse.next();
        }
        console.error("API key not found")
        return NextResponse.json({ error: "API key missing" }, { status: 401 });
    }
}

// Match all routes
export const config = {
    matcher: "/:path((?!.*\\.(?:css|js|png|jpg|jpeg|gif|webp|svg|ico)).*)",
}
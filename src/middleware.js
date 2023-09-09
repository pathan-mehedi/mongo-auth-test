import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const path = request.nextUrl.pathname;

    const isPublichPath = path === "/login" || path === "/signup";

    const token = request.cookies.get("token")?.value || "";

    if (isPublichPath && token) {
        return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
    }
    if (!isPublichPath && !token) {
        console.log("have to loging frist");
        return NextResponse.redirect(new URL("/login", request.nextUrl));
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/", "/login", "/signup", "/dashboard"],
};

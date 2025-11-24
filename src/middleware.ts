import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Get the auth token from cookies
    const token = request.cookies.get("authToken")?.value || "";

    // List of protected routes
    const protectedRoutes = ["/dashboard", "/profile", "/settings"];
    const isProtectedRoute = protectedRoutes.some((route) =>
        pathname.startsWith(route)
    );

    // Redirect to login if accessing protected route without token
    if (isProtectedRoute && !token) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    // Redirect to dashboard if already logged in and accessing login page
    if (
        (pathname === "/auth/login" && token) ||
        (pathname === "/auth/register" && token)
    ) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // Create response and add custom headers
    const response = NextResponse.next();
    response.headers.set("x-pathname", pathname);
    response.headers.set("x-custom-header", "my-value");

    return response;
}

// Configure which routes this middleware applies to
export const config = {
    matcher: [
        // Match all routes except these
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
        "/",
        "/dashboard/:path*",
        "/auth/login",
        "/auth/register",
    ],
};

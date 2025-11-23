import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json({
            message: "Logged out successfully",
            status: true,
        });

        // Clear the authentication token cookie
        response.cookies.set("authToken", "", {
            httpOnly: true,
            expires: new Date(0),
        });
        return response;
    } catch (error) {
        return NextResponse.json(
            {
                message:
                    error instanceof Error
                        ? error.message
                        : "An error occurred during logout",
            },
            { status: 500 }
        );
    }
}

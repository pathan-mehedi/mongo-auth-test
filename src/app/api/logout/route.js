const { NextResponse } = require("next/server");
import { cookies } from "next/headers";

export async function GET() {
    try {
        const response = NextResponse.json({
            success: true,
            message: "User logged out successfully.",
        });
        response.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(0),
        });
        response.cookies.set("email", "", {
            httpOnly: true,
            expires: new Date(0),
        });
        return response;
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

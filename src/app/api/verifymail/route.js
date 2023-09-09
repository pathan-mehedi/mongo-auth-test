import connectToDb from "@/database";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

connectToDb();

export async function POST(req) {
    try {
        const reqBody = await req.json();
        const { token } = reqBody;
        console.log(token);

        const user = await User.findOne({
            verifyToken: token,
            verifyTokenExpiry: { $gt: Date.now() },
        });

        if (!user) {
            return NextResponse.json(
                { error: "Invalid or expired token" },
                400
            );
        }
        console.log(user);

        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;
        user.isVerified = true;
        await user.save();

        return NextResponse.json(
            { message: "Email verified successfully" },
            200
        );
    } catch (error) {
        return NextResponse.json({ error: error.message }, 400);
    }
}

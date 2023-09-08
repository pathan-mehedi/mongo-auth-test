import connectToDb from "@/database";
import User from "@/models/user";
import { compare } from "bcryptjs";
import Joi from "joi";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

export const dynamic = "force-dynamic";

export async function POST(req) {
    await connectToDb();

    const { email, password } = await req.json();

    const { error } = schema.validate({ email, password });

    if (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 400 }
        );
    }

    try {
        const checkUser = await User.findOne({ email });
        if (!checkUser) {
            return NextResponse.json(
                { success: false, message: "Email Not Found" },
                { status: 404 }
            );
        }

        const checkPassword = await compare(password, checkUser.password);
        if (!checkPassword) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid Password, Please Try Agian",
                },
                { status: 401 }
            );
        }

        const token = jwt.sign(
            { id: checkUser._id, email: checkUser.email },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        const finalResutl = {
            token,
            user: {
                _id: checkUser._id,
                email: checkUser.email,
                name: checkUser.name,
            },
        };

        return NextResponse.json(
            {
                success: true,
                message: "Logged In Successfully",
                data: finalResutl,
            },
            { status: 200 }
        );
    } catch (error) {
        console.log("Error while logging in: ", error);
        return NextResponse.json(
            { success: false, message: "Error while logging in" },
            { status: 500 }
        );
    }
}

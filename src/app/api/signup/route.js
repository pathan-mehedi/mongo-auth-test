import connectToDb from "@/database";
import Joi from "joi";
import bcrypt from "bcryptjs"; // Import bcrypt for password hashing
import { NextResponse } from "next/server";
import User from "@/models/user";
import { sendEmail } from "@/helper/mailer";

const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
});

export const dynamic = "force-dynamic";

export async function POST(req, res) {
    await connectToDb();

    const { email, password } = await req.json(); // Get the email and password from the request body;
    const { error } = schema.validate({ email, password });
    if (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: error.details[0].message,
        });
    }

    try {
        // Check if the user already exists
        const isUserAlreadyExists = await User.findOne({ email });
        if (isUserAlreadyExists) {
            return NextResponse.json({
                success: false,
                message: "User already exists. Please try with a new email.",
            });
        } else {
            const hashedPassword = await bcrypt.hash(password, 12); // Hash the password
            const newlyCreatedUser = await User.create({
                email,
                password: hashedPassword, // Store the hashed password
            });
            const newlyCreatedUserSaved = await newlyCreatedUser.save();
            console.log(" the new user data ", newlyCreatedUserSaved);

            if (newlyCreatedUser) {
                //send email to the user
                await sendEmail(email);

                const response = NextResponse.json({
                    success: true,
                    message: "User Account created successfully.",
                });
                return response;
            }
        }
    } catch (error) {
        console.log("Error in new user creation");

        return NextResponse.json({
            success: false,
            message: error.message,
        });
    }
}

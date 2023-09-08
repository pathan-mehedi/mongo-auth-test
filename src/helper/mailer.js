import nodemailer from "nodemailer";
import User from "@/models/user";
import bcryptjs from "bcryptjs";

export const sendMail = async (email, emailType, userId) => {
    try {
        const hasedToken = await bcryptjs.hash(userId.toString, 10);

        await User.findByIdAndUpdate(userId, {
            resetToken: hasedToken,
            resetTokenExpiration: Date.now() + 3600000,
        });

        if (emailType) {
            await User.findByIdAndUpdate(userId, {
                verifyToken: hasedToken,
                verifyTokenExpiry: Date.now() + 3600000,
            });
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, {
                resetToken: hasedToken,
                restTokenExpiry: Date.now() + 3600000,
            });
        }

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "b67a08aaf7cb30",
                pass: "e6213d09b8a26d",
                //TODO: add your mailtrap credentials here
            },
        });

        const mailOptions = {
            from: "mehedipathan@gmail.com",
            to: email,
            subject: "Verify your email",
            html: `<h1>Verify your email</h1>
            <p>Click <a href="http://localhost:3000/verify/${hasedToken}">here</a> to verify your email</p>`,
        };

        const mailResponse = await transport.sendMail(mailOptions);
        return mailResponse;
    } catch (error) {
        throw new Error(error.message);
    }
};

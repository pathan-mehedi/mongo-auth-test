import connectToDb from "@/database";
import Joi from "joi";

const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
});

export const dynamic = "force-dynamic";

export async function POST(res, req) {
    await connectToDb();

    const { email, password } = await req.body;
    //validate the user input
    const { error } = await schema.validateAsync({ email, password });
    if (error) {
        return res.status(422).json({ message: error.message });
    }

    //check if the user already exists
    try {
        //check if the user already exists
        const isUserAlreadyExists = await User.findOne({ email });
        if (isUserAlreadyExists) {
            return res.status(422).json({
                success: false,
                message: "User already exists. Please try with a new email.",
            });
        } else {
            const hassedPassword = await bcrypt.hash(password, 12);
            const newlyCreatedUser = await User.create({
                email,
                password: hassedPassword,
            });

            if (newlyCreatedUser) {
                return res.status(201).json({
                    success: true,
                    message: "User Account created successfully.",
                });
            }
        }
    } catch (error) {
        console.log("Error in new user creation");

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

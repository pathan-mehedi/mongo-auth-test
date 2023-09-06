import mongoose from "mongoose";

const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connectToDb = async () => {
    const connectionUrl = process.env.MONGO_URL;

    mongoose
        .connect(connectionUrl, configOptions)
        .then(() => {
            console.log("Connected to database");
        })
        .catch((error) => {
            console.log(`Getting error from DB Connection ${error.message}`);
        });
};

export default connectToDb;

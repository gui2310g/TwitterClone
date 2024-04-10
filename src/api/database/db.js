import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const user = process.env.DB_USER
const key = process.env.DB_KEY

const connectDB = () => {
    console.log("Wait connecting from database...");

    mongoose
    .connect(`mongodb+srv://${user}:${key}@twitterclone.l7gaqwm.mongodb.net/?retryWrites=true&w=majority&appName=TwitterClone`)
    .then(() => console.log("MongoDB Atlas Connected!"))
    .catch((err) => console.log(`Error connecting to MongoDB Atlas: ${err}`))
};

export default connectDB;
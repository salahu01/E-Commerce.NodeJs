import mongoose from "mongoose"
import { config } from "dotenv";

config()

const dbUrl = process.env.MONGO_DB ?? '';

export async function connectDb() {
    mongoose.set('strictQuery', true)
    await mongoose.connect(dbUrl);
}

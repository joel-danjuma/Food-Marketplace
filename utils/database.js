import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;

const connectDb = async () => mongoose.connect(MONGO_URL);

export default connectDb;

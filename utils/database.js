import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;

const connectDb = async () =>
  mongoose.connect(
    "mongodb+srv://joeldanjuma:Joelahmadun1@mycluster.3xhvbnz.mongodb.net/"
  );

export default connectDb;

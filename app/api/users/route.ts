import { NextResponse } from "next/server.js";
import connectDb from "../../../utils/database.js";
// import User from "../../models/Users.js";
import mongoose from "mongoose";

export async function GET() {
  const MONGO_URL = process.env.MONGO_URI;
  mongoose.Promise = Promise;
  console.log("Connecting to database...");
  await connectDb();
  console.log("database connection succesful");
  mongoose.connection.on("error", (error: Error) => console.log(error));
  return NextResponse.json({ status: 200 });
}

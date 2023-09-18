import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.users.findMany();
  return NextResponse.json({ users: users }, { status: 200 });
}

// import { NextResponse } from "next/server.js";
// import connectDb from "../../../utils/database.js";
// // import User from "../../models/Users.js";
// import mongoose from "mongoose";

// export async function GET() {
//   const MONGO_URL = process.env.MONGO_URI;
//   mongoose.Promise = Promise;
//   console.log("Connecting to database...");
//   await connectDb();
//   console.log("database connection succesful");
//   mongoose.connection.on("error", (error: Error) => console.log(error));
//   return NextResponse.json({ status: 200 });
// }

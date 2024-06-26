import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
export const POST = async (request) => {
  // Connect MongoDB
  const db = await connectDB();

  // Create User Collection
  const userCollection = db.collection("users");

  // Get User Value
  const userInfo = await request.json();

  try {
    // Check User
    const existUser = await userCollection.findOne({ email: userInfo.email });
    if (existUser) {
      return NextResponse.json({ message: "User Already Exist", status: 400 });
    }

    // Password Hash Generate
    const hashPassword = bcrypt.hashSync(userInfo.password, 14);
    const res = await userCollection.insertOne({
      ...userInfo,
      password: hashPassword,
    });
    return NextResponse.json({
      res,
      message: "User Registration Successful",
    });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
};

import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  // Connect DB
  const db = await connectDB();
  const companyCollection = db.collection("companies");

  try {
    const companyData = await request.json();
    const res = await companyCollection.insertOne(companyData);
    return NextResponse.json({ res });
  } catch (error) {
    return NextResponse.json({ error });
  }
};

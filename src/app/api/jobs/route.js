import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  // Connect DB
  const db = await connectDB();
  const jobCollection = db.collection("jobs");

  try {
    const jonData = await request.json();
    const res = await jobCollection.insertOne(jonData);
    return NextResponse.json({ res });
  } catch (error) {
    return NextResponse.json({ error });
  }
};

export const GET = async () => {
  // Connect DB
  const db = await connectDB();
  const jobCollection = db.collection("jobs");

  try {
    const res = await jobCollection.find().toArray();
    return NextResponse.json({ res });
  } catch (error) {
    return NextResponse.json({ error });
  }
};

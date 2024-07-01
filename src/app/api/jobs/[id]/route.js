import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  // Connect DB
  const db = await connectDB();
  const jobsCollection = db.collection("jobs");

  try {
    const job = await jobsCollection.findOne({ _id: new ObjectId(params.id) });
    return NextResponse.json({ job });
  } catch (error) {
    return NextResponse.json({ error });
  }
};

import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  // Connect DB
  const db = await connectDB();
  const companyCollection = db.collection("companies");

  try {
    const res = await companyCollection
      .find({ ownerEmail: params.email })
      .toArray();

    return NextResponse.json({ res });
  } catch (error) {
    return NextResponse.json({ error });
  }
};

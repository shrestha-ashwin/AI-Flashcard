import { NextResponse } from "next/server";
import { db } from "@/app/config/firebase-config";

export async function POST(req: Request) {
  try {
    const { cards, name } = await req.json();
    return NextResponse.json("success");
  } catch (e) {
    console.error(e);
  }
}

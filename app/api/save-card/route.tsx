import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    return NextResponse.json("reached");
  } catch (e) {
    console.error(e);
  }
}

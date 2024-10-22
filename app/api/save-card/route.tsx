import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { cards } = await req.json();
    console.log(cards);
    return NextResponse.json("success");
  } catch (e) {
    console.error(e);
  }
}

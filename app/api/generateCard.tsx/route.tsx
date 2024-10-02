import OpenAI from "openai";
import { NextResponse } from "next/server";
const openai = new OpenAI();

const system = "You are a helpful assistant";

export async function POST(req: Request) {
  const { message } = await req.json();

  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: system },
      {
        role: "user",
        content: message,
      },
    ],
  });

  console.log(completion.choices[0].message);
}

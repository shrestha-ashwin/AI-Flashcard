import OpenAI from "openai";
import { NextResponse } from "next/server";
const openai = new OpenAI();

const system = `You are a flashcard creator, you take in text and create multiple flashcards from it. Make sure to create exactly 10 flashcards.
Both front and back should be one sentence long.
You should return in the following JSON format:
{
  "flashcards":[
    {
      "front": "Front of the card",
      "back": "Back of the card"
    }
  ]
}`;

export async function POST(req: Request) {
  try {
    const { name } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: system },
        {
          role: "user",
          content: name,
        },
      ],
      response_format: { type: "json_object" },
    });

    const response = JSON.parse(
      completion.choices[0].message.content as string
    );
    return NextResponse.json(response.flashcards);
  } catch (err) {
    console.error(err);
  }
}

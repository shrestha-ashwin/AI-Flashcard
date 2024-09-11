const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { amount } = await req.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
    });
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ status: 500, error: err });
  }
}

"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import convertToSubCurrency from "@/lib/convertToSubCurrency";

if (process.env.NEXT_PUBLIC_STRIPE_KEY === undefined) {
  throw new Error("STRIPE PUBLIC KEY not found");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!);

export default function Home() {
  const amount = 10;

  return (
    <div>
      <h1>Payment</h1>
      <div>
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: convertToSubCurrency(amount)!,
            currency: "usd",
          }}
        >
          {/* <CheckoutPage amount={amount} /> */}
        </Elements>
      </div>
    </div>
  );
}

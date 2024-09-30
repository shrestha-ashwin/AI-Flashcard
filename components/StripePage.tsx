"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import convertToSubCurrency from "@/lib/convertToSubCurrency";
import CheckoutPage from "@/components/CheckoutPage";

if (process.env.NEXT_PUBLIC_STRIPE_KEY === undefined) {
  throw new Error("STRIPE PUBLIC KEY not found");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!);

export default function Home() {
  const amount = 5;

  return (
    <div className="max-w-[900px] mx-auto px-6 mt-28">
      <h1 className="text-center font-semibold text-lg mb-8 mt-4">Payment</h1>
      <p className="text-center mb-10 text-2xl">
        Get Pro for <span className="font-semibold">${amount}</span>
      </p>
      <div>
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: convertToSubCurrency(amount)!,
            currency: "usd",
          }}
        >
          <CheckoutPage amount={amount} />
        </Elements>
      </div>
    </div>
  );
}

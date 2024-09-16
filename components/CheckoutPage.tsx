import { useState, useEffect, useCallback } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import convertToSubCurrency from "@/lib/convertToSubCurrency";

export default function CheckoutPage({ amount }: { amount: number }) {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMsg, setErrorMsg] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitPayment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMsg(submitError.message);
      setIsLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "http://localhost:3000/payment-success",
      },
    });

    if (error) {
      setErrorMsg(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    console.log("sending request to server");
    fetch("/api/checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubCurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
    console.log("returned");
  }, [amount]);

  return (
    <form onSubmit={submitPayment}>
      {clientSecret && <PaymentElement />}
      {errorMsg && <div className="m-2">{errorMsg}</div>}
      <button
        disabled={!stripe || isLoading}
        className="bg-black text-white p-5 rounded-md mt-3 w-full font-bold disabled:opacity-50 "
      >
        {!isLoading ? `Pay $${amount}` : "...Processing"}
      </button>
    </form>
  );
}

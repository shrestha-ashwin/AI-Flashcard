import { useState, useEffect } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

export default function CheckoutPage(amount: { amount: number }) {
  const stripe = useStripe();
  const elements = useElements();
}

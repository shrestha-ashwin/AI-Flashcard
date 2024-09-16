import { useState, useEffect } from "react";

const SuccessIcon = (
  <svg
    width="26"
    className="mb-2"
    height="24"
    viewBox="0 0 16 14"
    fill="#000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.4695 0.232963C15.8241 0.561287 15.8454 1.1149 15.5171 1.46949L6.14206 11.5945C5.97228 11.7778 5.73221 11.8799 5.48237 11.8748C5.23253 11.8698 4.99677 11.7582 4.83452 11.5681L0.459523 6.44311C0.145767 6.07557 0.18937 5.52327 0.556912 5.20951C0.924454 4.89575 1.47676 4.93936 1.79051 5.3069L5.52658 9.68343L14.233 0.280522C14.5613 -0.0740672 15.1149 -0.0953599 15.4695 0.232963Z"
      fill="#2b8a3e"
    />
  </svg>
);

export default function PaymentSucess({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {
  return (
    <div className="max-w-[400px] mx-auto flex flex-col items-center justify-items-center mt-12 text-lg">
      {SuccessIcon}
      <p>Payment successful!</p>
    </div>
  );
}

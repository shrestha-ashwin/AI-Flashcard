"use client";

import { create } from "@/public/icons";

export default function CreateFlashcard() {
  const sendReq = async () => {
    try {
      const message = "marvel";
      const data = await fetch("/api/generateCard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      console.log("it reached client");
      const { response } = await data.json();
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex justify-end">
      <button
        onClick={sendReq}
        className="bg-[#9c36b5] text-lightGrey flex items-center px-4 py-[5px] text-sm mb-3 rounded-md"
      >
        <span className="mr-[6px] mb-[2px] text-lg">+</span>
        Create New Flashcard
      </button>
    </div>
  );
}

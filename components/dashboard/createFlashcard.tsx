"use client";

import Name from "./Name";
import { useEffect, useState } from "react";

export default function CreateFlashcard() {
  const [message, setMessage] = useState("");
  const [textBox, setTextBox] = useState(false);

  useEffect(() => {
    if (message) {
      const sendReq = async () => {
        console.log(message);
        setTextBox(false);
        try {
          const data = await fetch("/api/generateCard", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message }),
          });
          console.log("it reached client");
          const response = await data.json();
          console.log(response);
        } catch (err) {
          console.error(err);
        }
      };
      sendReq();
    }
  }, [message]);

  const hideTextBox = () => {
    setTextBox(false);
  };

  const showBox = () => {
    setTextBox(true);
  };

  const changeMessage = (message: string) => {
    setMessage(message);
    console.log(message);
  };

  return (
    <div className="flex justify-end">
      <button
        onClick={showBox}
        className="bg-[#9c36b5] text-lightGrey flex items-center px-4 py-[5px] text-sm mb-3 rounded-md"
      >
        <span className="mr-[6px] mb-[2px] text-lg">+</span>
        Create New Flashcard
      </button>
      {textBox ? (
        <Name hideTextBox={hideTextBox} changeMessage={changeMessage} />
      ) : (
        ""
      )}
    </div>
  );
}

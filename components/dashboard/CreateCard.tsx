import Name from "./Name";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { FlashCardContext } from "@/lib/flashCardContext";

export default function CreateCard() {
  const [message, setMessage] = useState("");
  const [textBox, setTextBox] = useState(false);
  const hasRendered = useRef(false);
  const router = useRouter();
  const { flashCard, setFlashCard } = FlashCardContext();

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
          setFlashCard(response);
        } catch (err) {
          console.error(err);
        }
      };
      sendReq();
    }
  }, [message]);

  useEffect(() => {
    if (hasRendered.current && flashCard.length > 0) {
      router.push("/dashboard/new");
    }
    hasRendered.current = true;
    console.log("ran");
  }, [flashCard, router]);

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

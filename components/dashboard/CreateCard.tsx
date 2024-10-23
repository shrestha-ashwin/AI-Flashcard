import Name from "./Name";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { FlashCardContext } from "@/lib/flashCardContext";

export default function CreateCard() {
  const [name, setName] = useState("");
  const [textBox, setTextBox] = useState(false);
  const hasRendered = useRef(false);
  const router = useRouter();
  const { flashCard, setFlashCard } = FlashCardContext();
  const [isCreatingCard, setIsCreatingCard] = useState(false);

  useEffect(() => {
    if (name) {
      const sendReq = async () => {
        setTextBox(false);
        setIsCreatingCard(true);
        try {
          const data = await fetch("/api/generateCard", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name }),
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
  }, [name, setFlashCard]);

  useEffect(() => {
    if (hasRendered.current && flashCard.length > 0 && isCreatingCard) {
      setIsCreatingCard(false);
      router.push(`/dashboard/new?name=${name}`);
    }
    hasRendered.current = true;
    console.log("ran");
  }, [flashCard, router, name, isCreatingCard]);

  const hideTextBox = () => {
    setTextBox(false);
  };

  const showBox = () => {
    setTextBox(true);
  };

  const changeName = (name: string) => {
    setName(name);
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
        <Name hideTextBox={hideTextBox} changeName={changeName} />
      ) : (
        ""
      )}
    </div>
  );
}

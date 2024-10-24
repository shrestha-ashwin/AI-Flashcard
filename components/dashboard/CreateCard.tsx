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
  const nameRef = useRef(name);

  useEffect(() => {
    nameRef.current = name;
  }, [name]);

  useEffect(() => {
    if (name) {
      const sendReq = async () => {
        setTextBox(false);
        setIsCreatingCard(true);
        setFlashCard([]);
        try {
          const data = await fetch("/api/generateCard", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name }),
          });
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
      router.push(`/dashboard/new?name=${nameRef.current}`);
    }
    hasRendered.current = true;
  }, [flashCard, router, isCreatingCard]);

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

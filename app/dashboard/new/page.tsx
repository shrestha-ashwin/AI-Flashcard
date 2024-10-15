"use client";
import NavBar from "@/components/dashboard/NavBar";
import { FlashCardContext } from "@/lib/flashCardContext";
import Card from "@/components/dashboard-new/Card";

export default function Page() {
  const { flashCard, useFlashCard } = FlashCardContext();
  console.log(flashCard);
  return (
    <div>
      <NavBar />
      <ul className="w-[800px] mx-auto px-4 grid grid-cols-3 gap-2">
        {flashCard.map((card) => {
          console.log(card);
          return <li className="w-[300px] ">{card.front}</li>;
        })}
      </ul>
    </div>
  );
}

"use client";
import NavBar from "@/components/dashboard/NavBar";
import { FlashCardContext } from "@/lib/flashCardContext";
import Card from "@/components/dashboard-new/Card";

type Flashcard = {
  front: string;
  back: string;
};

export default function Page() {
  const { flashCard } = FlashCardContext();
  console.log(flashCard);
  return (
    <div>
      <NavBar />
      <Card cards={flashCard} />
    </div>
  );
}

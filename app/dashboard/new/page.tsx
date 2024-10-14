"use client";
import NavBar from "@/components/dashboard/NavBar";
import { FlashCardContext } from "@/lib/flashCardContext";

export default function Page() {
  const { flashCard, useFlashCard } = FlashCardContext();
  console.log(flashCard);
  return (
    <div>
      <NavBar />
    </div>
  );
}

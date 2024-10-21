"use client";
import NavBar from "@/components/dashboard/NavBar";
import { FlashCardContext } from "@/lib/flashCardContext";
import Cards from "@/components/dashboard-new/Cards";
import { redirect } from "next/navigation";

export default function Page() {
  const { flashCard } = FlashCardContext();
  if (flashCard.length == 0) {
    redirect("/dashboard");
  }
  console.log(flashCard);
  return (
    <div className="cards-container">
      <NavBar />
      <Cards cards={flashCard} />
    </div>
  );
}

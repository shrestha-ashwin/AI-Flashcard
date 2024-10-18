"use client";
import NavBar from "@/components/dashboard/NavBar";
import { FlashCardContext } from "@/lib/flashCardContext";
import Cards from "@/components/dashboard-new/Cards";
import { redirect, useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { flashCard } = FlashCardContext();
  if (flashCard.length == 0) {
    redirect("/dashboard");
  }
  console.log(flashCard);
  return (
    <div>
      <NavBar />
      <Cards cards={flashCard} />
    </div>
  );
}

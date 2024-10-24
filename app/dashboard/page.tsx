"use client";
import NavBar from "@/components/dashboard/NavBar";
import Hero from "@/components/dashboard/Hero";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();

  const isCardSaved = searchParams.get("cardSaved");

  return (
    <div className="bg-[#f1f3f5] h-[100vh] relative ">
      <NavBar />
      <Hero isCardSaved />
    </div>
  );
}

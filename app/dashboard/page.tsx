"use client";
import NavBar from "@/components/dashboard/NavBar";
import Hero from "@/components/dashboard/Hero";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();

  let isCardSaved = Boolean(searchParams.get("status"));
  console.log(isCardSaved);

  return (
    <div className="bg-[#f1f3f5] h-[100vh] relative ">
      <NavBar />
      <Hero isCardSaved={isCardSaved} />
    </div>
  );
}

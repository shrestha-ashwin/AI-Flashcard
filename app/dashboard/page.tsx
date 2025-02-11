"use client";
import NavBar from "@/components/dashboard/NavBar";
import Hero from "@/components/dashboard/Hero";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const [isCardSaved, setIsCardSaved] = useState(false);

  useEffect(() => {
    setIsCardSaved(searchParams.get("status") === "true");
  }, [searchParams]);

  return (
    <div className="bg-[#f1f3f5] h-[100vh] relative ">
      <NavBar />
      <Hero isCardSaved={isCardSaved} />
    </div>
  );
}

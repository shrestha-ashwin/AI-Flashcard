"use client";
import { Suspense } from "react";
import NavBar from "@/components/dashboard/NavBar";
import Hero from "@/components/dashboard/Hero";
import { useSearchParams } from "next/navigation";

function SearchParamsComponent() {
  const searchParams = useSearchParams();
  const isCardSaved = searchParams.get("status") === "true";

  return <Hero isCardSaved={isCardSaved} />;
}

export default function Page() {
  return (
    <div className="bg-[#f1f3f5] h-[100vh] relative">
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <SearchParamsComponent />
      </Suspense>
    </div>
  );
}

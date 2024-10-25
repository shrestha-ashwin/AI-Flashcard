"use client";

import CreateCard from "./CreateCard";
import { useEffect, useState } from "react";

export default function Hero({ isCardSaved }: { isCardSaved: boolean }) {
  const [status, setStatus] = useState(isCardSaved);
  console.log(isCardSaved);

  setTimeout(() => {
    setStatus(false);
  }, 4000);

  return (
    <div className="">
      <div className="max-w-[1000px] mx-auto px-10">
        <CreateCard />
        <section className="bg-white px-6 py-3">
          <div className="mb-6 relative">
            {status ? (
              <p className="inline-block px-8 py-2 bg-white font-medium absolute -top-[80px] left-[320px] rounded-md">
                Saved
              </p>
            ) : (
              ""
            )}
            <h2 className="text-[#9c36b5] font-semibold text-2xl mb-1">
              Flashcards
            </h2>
            <h3 className="text-lightText text-[15px]">
              Manage and review your flashcards
            </h3>
          </div>
          <div>Create your flashcard</div>
        </section>
      </div>
    </div>
  );
}

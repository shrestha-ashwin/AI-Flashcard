"use client";

import CreateCard from "./CreateCard";
import { useState } from "react";

export default function Hero(isCardSaved) {
  const [flashCards, setFlashCards] = useState([]);

  return (
    <div className="">
      <div className="max-w-[1000px] mx-auto px-10 ">
        <CreateCard />
        <section className="bg-white px-6 py-3">
          <div className="mb-6">
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

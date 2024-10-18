import { useState } from "react";

type FlashCard = {
  front: string;
  back: string;
};

export default function Card({ card }: { card: FlashCard }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <li
      className={`flashcard ${isFlipped ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">{card.front}</div>
        <div className="flashcard-back">{card.back}</div>
      </div>
    </li>
  );
}

type FlashCard = {
  front: string;
  back: string;
};

export default function Card({ cards }: { cards: FlashCard[] }) {
  return (
    <ul className="max-w-[800px] mx-auto px-4 flashcard-grid bg-">
      {cards.map((card, id) => {
        console.log(card);
        return (
          <li key={id} className="flashcard">
            {card.front}
          </li>
        );
      })}
    </ul>
  );
}

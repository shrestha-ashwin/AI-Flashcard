import Card from "./Card";

type FlashCard = {
  front: string;
  back: string;
};

export default function Cards({ cards }: { cards: FlashCard[] }) {
  return (
    <ul className="max-w-[800px] mx-auto px-4 flashcard-grid mb-[80px]">
      {cards.map((card, id) => {
        console.log(card);
        return <Card key={id} card={card} />;
      })}
    </ul>
  );
}

export default function Card({ cards }) {
  return (
    <ul className="w-[800px] mx-auto px-4 gap-2 flashcard-grid">
      {cards.map((card) => {
        console.log(card);
        return <li className="flashcard">{card.front}</li>;
      })}
    </ul>
  );
}

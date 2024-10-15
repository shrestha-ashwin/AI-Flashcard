export default function Card({ cards }) {
  return (
    <ul className="max-w-[800px] mx-auto px-4 flashcard-grid">
      {cards.map((card) => {
        console.log(card);
        return <li className="flashcard">{card.front}</li>;
      })}
    </ul>
  );
}

export default function Card({ cards }) {
  return (
    <ul className="">
      {cards.map((card) => {
        console.log(card);
        <li>{card.front}</li>;
      })}
    </ul>
  );
}

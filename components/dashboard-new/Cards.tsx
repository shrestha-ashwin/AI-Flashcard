import Card from "./Card";
import { useRouter } from "next/navigation";

type FlashCard = {
  front: string;
  back: string;
};

export default function Cards({
  cards,
  name,
}: {
  cards: FlashCard[];
  name: string;
}) {
  const router = useRouter();
  const saveCards = async () => {
    try {
      const data = await fetch("/api/save-card", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cards, name }),
      });

      const { status } = await data.json();
      console.log(`cards: ${status}`);

      router.push(`/dashboard?status=${status}`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="mb-[100px]">
      <ul className="max-w-[800px] mx-auto px-4 flashcard-grid mb-[80px]">
        {cards.map((card, id) => {
          return <Card key={id} card={card} />;
        })}
      </ul>
      <div className="flex justify-center">
        <button
          className=" px-20 py-3 bg-[#000] text-white rounded-lg"
          onClick={saveCards}
        >
          Save
        </button>
      </div>
    </div>
  );
}

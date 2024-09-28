import {
  score,
  accelerate,
  memory,
  concentration,
  active,
  robot,
} from "@/public/icons";

export default function Info() {
  return (
    <div className="info-grid grid max-w-[1000px] mx-auto mb-[80px] px-3 py-2 bg-black">
      <div className="">
        <h2 className="text-3xl font-semibold mb-5 text-white text-center">
          AI Flashcards
        </h2>
        <div className="">{robot}</div>
      </div>
      <div className="flex flex-col text-lightGrey">
        <div className="flex gap-2 items-center">
          {score}Score better on exams
        </div>
        <div className="flex gap-2 items-center">
          {accelerate}Accelerate learning speed
        </div>
        <div className="flex gap-2 items-center">{memory}Improved memory</div>
        <div className="flex gap-2 items-center">
          {concentration}Enchanced concentration
        </div>
        <div className="flex gap-2 items-center">{active}Active recall</div>
      </div>
    </div>
  );
}

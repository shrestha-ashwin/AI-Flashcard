import {
  score,
  accelerate,
  memory,
  concentration,
  active,
  robot,
  cute_robot,
} from "@/public/icons";

export default function Info() {
  return (
    <div className="mb-[90px] bg-black">
      <div className="info-grid grid max-w-[1000px] mx-auto px-5 py-9">
        <div className="">
          <h2 className="text-3xl font-semibold mb-4 text-white text-center">
            AI Flashcards
          </h2>
          <div className="w-full flex justify-center">{robot}</div>
        </div>
        <div className="flex flex-col text-lightGrey justify-center mx-auto">
          <div className="flex gap-4 mb-3 items-center">
            {score}
            <div>
              <span className="info-highlight">Score</span> better on exams
            </div>
          </div>
          <div className="flex gap-4 mb-3 items-center">
            {accelerate}
            <div>
              <span className="info-highlight">Accelerate</span> learning speed
            </div>
          </div>
          <div className="flex gap-4 mb-3 items-center">
            {memory}
            <div>
              <span className="info-highlight">Improved</span> memory
            </div>
          </div>
          <div className="flex gap-4 mb-3 items-center">
            {concentration}
            <div>
              <span className="info-highlight">Enchanced</span> concentration
            </div>
          </div>
          <div className="flex gap-4 items-center">
            {active}
            <div>
              <span className="info-highlight">Active</span> recall
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

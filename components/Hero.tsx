import { typing, loading, saving } from "@/public/icons";

export default function Hero() {
  return (
    <div className="flex justify-center mb-[70px]">
      <div className=" flex flex-col gap-2 items-center py-2 w-[1000px]">
        <h2 className="font-bold text-[2rem] px-2 text-center mb-2 mt-4">
          Instant flashcards based on your topic choice
        </h2>
        <p className="mb-9">
          Learn using the power of active recall, and enjoy the process!
        </p>
        <div className="mb-8 grid card-grid gap-x-9 gap-y-2 w-full justify-items-center">
          <div className="card mb-6 h-[17rem]">
            {typing}
            <h3 className="mb-3 font-semibold">Step 1: Type your topic</h3>
            <p className="text-center text-lightText">
              Write the topic you want flashcards to be generated for.
            </p>
          </div>
          <div className="card mb-6 h-[17rem]">
            {loading}
            <h3 className="mb-3 font-semibold">Step 2: Wait...</h3>
            <p className="text-center text-lightText">
              Retreving and processing data takes time, so it might take a
              while.
            </p>
          </div>
          <div className="card h-[17rem] card-3">
            {saving}
            <h3 className="mb-4 font-semibold">
              Step 3: Walla! Your cards are here!
            </h3>
            <p className="text-center text-lightText">
              The flashcards are generated, and you can save your topic and the
              flashcards you generated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

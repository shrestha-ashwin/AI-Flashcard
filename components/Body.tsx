import { typing, saving, loading } from "@/public/icons";

export default function Body() {
  return (
    <div className="bg-lightGrey flex justify-center">
      <div className=" flex flex-col gap-2 items-center py-2 w-[1000px] px-4">
        <h2 className="font-bold text-[2rem] px-2 text-center mb-2">
          Instant flashcards based on your topic choice
        </h2>
        <p className="mb-9">
          Learn using the power of active recall, and enjoy the process!
        </p>
        <div className="mb-8 grid card-grid gap-x-9 gap-y-2 w-full justify-items-center">
          <div className="card mb-6 h-[17rem]">
            {typing}
            <h3 className="mb-3 font-semibold">Step 1: Type your topic</h3>
            <p className="text-center">
              Write the topic you want flashcards to be generated for.
            </p>
          </div>
          <div className="card mb-6 h-[17rem]">
            {loading}
            <h3 className="mb-3 font-semibold">Step 2: Wait...</h3>
            <p className="text-center">
              Retreving and processing data takes time, so it might take a
              while.
            </p>
          </div>
          <div className="card h-[17rem]">
            {saving}
            <h3 className="mb-4 font-semibold">
              Step 3: Walla! Your cards are here!
            </h3>
            <p className="text-center">
              The flashcards are generated, and you can save your topic, and the
              flashcards you generated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

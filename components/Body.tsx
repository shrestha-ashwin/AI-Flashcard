import { typing, saving, loading } from "@/public/icons";

export default function Body() {
  return (
    <div className="bg-lightGrey flex justify-center">
      <div className=" flex flex-col gap-2 items-center py-2 max-w-[800px]">
        <h2 className="font-bold text-[2rem]  px-2 text-center mb-2">
          Instant flashcards based on your topic choice
        </h2>
        <p>Learn using the power of active recall, and enjoy the process!</p>
        <div>
          <div className="card mb-6">
            {typing}
            <h3 className="mb-3">Step 1: Type your topic</h3>
            <p className="text-center">
              Write the topic you want flashcards to be generated for.
            </p>
          </div>
          <div className="card mb-6">
            {loading}
            <h3 className="mb-3">Step 2: Wait...</h3>
            <p className="text-center">
              Retreving and processing data takes time, so it might take a
              while.
            </p>
          </div>
          <div className="card ">
            <h3 className="mb-3">Step 3: Walla! Your cards are here!</h3>
            {saving}
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

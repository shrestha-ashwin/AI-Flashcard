import { typing, loading, saving } from "@/public/icons";

export default function Hero() {
  return (
    <div className="flex justify-center mb-[70px] px-4">
      <div className=" flex flex-col gap-2 items-center py-2 w-[1090px]">
        <h2 className="font-semibold text-[2rem] px-2 text-center mb-2 mt-4">
          Instant flashcards based on your topic choice
        </h2>
        <p className="mb-9 text-lightText">
          Learn using the power of active recall, and enjoy the process!
        </p>
        <div className="mb-8 grid card-grid gap-x-9 gap-y-2 w-full justify-items-center">
          <div className="card mb-6 h-[16rem] ">
            {typing}
            <h3 className="mb-3 text-[17px] font-semibold mt-4">
              Type your topic
            </h3>
            <p className="text-lightText">
              Write the topic you want flashcards to be generated for.
            </p>
          </div>
          <div className="card mb-6 h-[16rem]">
            {loading}
            <h3 className="mb-3 text-[17px] font-semibold mt-4">Wait</h3>
            <p className="text-lightText">
              Retreving and processing data takes time, so it might take a
              while.
            </p>
          </div>
          <div className="card h-[16rem] card-3 ">
            {saving}
            <h3 className="mb-3 text-[17px] font-semibold mt-4">
              Cards are generated!
            </h3>
            <p className="text-lightText">
              The flashcards are generated, and you can save the flashcards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

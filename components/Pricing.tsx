import { tick, tickWhite } from "@/public/icons";

export default function Pricing() {
  return (
    <section className="mb-[70px]">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-3xl text-center font-semibold mb-4">
          Retain more information, and learn better.
        </h2>
        <h3 className="text-lg text-lightText mb-14">
          Enjoy unlimited flashcards, and unlimited saves
        </h3>
      </div>

      <div className="grid grid-cols-2 pricing-container max-w-[700px] gap-6 text-lightText justify-items-center mx-auto">
        <div className="pricing-card">
          <div className="">
            <h3 className="mb-3">Free</h3>
            <div className="text-black mb-5">
              <span className="font-semibold text-4xl">$0</span> /month
            </div>
            <p className="mb-3">Begin your learning journey here.</p>
          </div>
          <div className=""></div>
          <div>
            <div className="pricing-stat mb-14">
              <div className="my-5 border-[0.5px] border-borderGrey"></div>
              <div className="pricing-benefit mb-[10px]">
                {tick}1 flashcard query per day
              </div>
              <div className="pricing-benefit">
                {tick}1 dedicated space to save the flashcard
              </div>
            </div>
            <button className="bg-black text-lightGrey px-5 py-3 rounded-3xl w-full mb-3">
              Get Started
            </button>
          </div>
        </div>
        <div className="pricing-card bg-black text-borderGrey">
          <div className="">
            <h3 className="mb-3">Pro</h3>
            <div className=" mb-5">
              <span className="font-semibold text-4xl">$5</span> /month
            </div>
            <p className="mb-3">Accelerate your learning journey.</p>
          </div>
          <div>
            <div className="pricing-stat mb-8">
              <div className="my-5 border-[0.5px] border-lightText opacity-100"></div>
              <div className="pricing-benefit text-[15px] mb-2">
                {tickWhite}
                <div>
                  <span className="font-semibold">Unlimited</span> flashcard
                  queries per day
                </div>
              </div>
              <div className="pricing-benefit text-[15px] ">
                {tickWhite}
                <div>
                  <span className="font-semibold">Unlimited</span> dedicated
                  space to save the flashcard
                </div>
              </div>
            </div>
            <button className="bg-white text-black w-full px-5 py-3 rounded-3xl mb-3">
              Choose Pro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Pricing() {
  return (
    <section className="mb-6">
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
            <div className="pricing-stat">
              <div></div>
              <div>1 flashcard query per day</div>
              <div>1 dedicated space to save the flashcard</div>
            </div>
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
            <div className="pricing-stat">
              <div></div>
              <div>Unlimited flashcard queries per day</div>
              <div>Unlimited dedicated space to save the flashcard</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

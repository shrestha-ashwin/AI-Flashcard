export default function Pricing() {
  return (
    <section className="mb-6">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-3xl text-center font-semibold mb-4">
          Retain more information, and learn better.
        </h2>
        <h3 className="text-lg text-lightText">
          Enjoy unlimited flashcards, and unlimited saves
        </h3>
      </div>
      <div>
        <div className="pricing-card">
          <div className="">
            <h3>Free</h3>
            <div>
              <span>$0</span>/month
            </div>
            <p>Begin your learning journey here.</p>
          </div>
          <div>
            <div className="pricing-stat">
              <div></div>
              <div>1 flashcard query per day</div>
              <div>1 dedicated space to save the flashcard</div>
            </div>
          </div>
        </div>
        <div className="pricing-card">
          <div className="">
            <h3>Pro</h3>
            <div>
              <span>$5</span>/month
            </div>
            <p>Accelerate your learning journey.</p>
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

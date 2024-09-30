import SignIn from "./SignIn";

export default function Intro() {
  const button = (
    <button className="bg-black text-lightGrey px-5 py-2 rounded-3xl">
      Get Started
    </button>
  );
  return (
    <div className="flex flex-col items-center mb-[99px] px-4">
      <h1 className="text-4xl md:text-5xl font-semibold mb-4">
        The flashcard you need
      </h1>
      <p className="mb-6 text-lightText">
        An easy way to make flashcards, powered by AI.
      </p>
      <SignIn button={button} />
    </div>
  );
}

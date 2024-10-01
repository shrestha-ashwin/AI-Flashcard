import { SignInButton } from "@clerk/nextjs";
import SignIn from "./SignIn";

export default function Outro() {
  const button = (
    <button className="bg-black text-borderGrey py-3 rounded-3xl px-7">
      Get Started
    </button>
  );
  return (
    <div className="px-6">
      <div className="mx-auto max-w-[900px] flex flex-col mb-28 bg-lightGrey px-6 py-16 rounded-[30px] items-center">
        <h1 className="font-semibold text-3xl text-center mb-6">
          Learn smarter, faster.
        </h1>
        <p className="text-center text-lightText mb-7">
          Create your flashcards, and boost your knowledge.
        </p>
        <SignIn button={button} />
      </div>
    </div>
  );
}

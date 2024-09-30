"use client";

import { useUser, SignInButton } from "@clerk/nextjs";

export default function NavBar() {
  const { user } = useUser();
  return (
    <nav className="mb-[100px] sticky top-0">
      <div className="h-14 w-full  text-black bg-white flex justify-around px-3 items-center py-2 ">
        <div className="justify-self-center font-medium  sm:max-lg:mr-[45%] lg:mr-[50%]">
          AI FlashCard
        </div>
        <SignInButton>
          <button className="justify-self-center text-lightGrey bg-black px-5 py-[6.5px] rounded-2xl text-sm">
            Get Started
          </button>
        </SignInButton>
      </div>
      <div className="border-[0.5px] border-borderGrey"></div>
    </nav>
  );
}

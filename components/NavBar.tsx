"use client";

import {
  useUser,
  SignInButton,
  SignedOut,
  SignedIn,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";

import SignInAuth from "@/components/SignInAuth";

export default function NavBar() {
  const { user } = useUser();
  const button = (
    <button className="justify-self-center text-lightGrey bg-black px-5 py-[6.5px] rounded-2xl text-sm">
      Get Started
    </button>
  );
  return (
    <nav className="mb-[100px] sticky top-0">
      <div className="h-14 w-full  text-black bg-white flex justify-around px-3 items-center py-2 ">
        <div className="justify-self-center font-medium  sm:max-lg:mr-[45%] lg:mr-[50%]">
          AI FlashCard
        </div>
        <div className="flex gap-2 items-center">
          <SignInAuth button={button} />
          <SignedIn>
            <div>{user?.firstName}</div>
            <UserButton />
          </SignedIn>
        </div>
      </div>
      <div className="border-[0.5px] border-borderGrey"></div>
    </nav>
  );
}

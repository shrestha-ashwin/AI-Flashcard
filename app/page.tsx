import { useState, useEffect } from "react";
import NavBar from "@/components/body/NavBar";
import Body from "@/components/body/Body";
import Page from "./dashboard/page";
import { auth } from "@clerk/nextjs/server";
import { SignedOut, SignedIn } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth();

  return (
    <div>
      <SignedOut>
        <div>
          <NavBar />
          <Body />
        </div>
      </SignedOut>
      <SignedIn>
        <Page />
      </SignedIn>
    </div>
  );
}

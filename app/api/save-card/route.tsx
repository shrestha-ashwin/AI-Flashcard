import { NextResponse } from "next/server";
import db from "@/app/config/firebase-config";
import { doc, collection, getDoc, setDoc } from "firebase/firestore";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json("user is not authenticated");
    }
    const { cards, name } = await req.json();
    const userDocRef = doc(db, "users", userId); //all documents in the collection "users"
    const userdocSnap = await getDoc(userDocRef);

    if (!userdocSnap.exists()) {
      await setDoc(userDocRef, {});
    }

    const setNameRef = doc(collection(userDocRef, "flashCardSets"), name);

    await setDoc(setNameRef, { flashcards: cards });

    return NextResponse.json({ cardSaved: true });
  } catch (e) {
    console.error("Error saving flashcards: ", e);
    return NextResponse.json({ cardSaved: false });
  }
}

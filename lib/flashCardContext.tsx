import { createContext, useContext, useState } from "react";

type FlashCard = {
  front: string;
  back: string;
};

type FlashCardContextType = {
  flashCard: FlashCard[];
  setFlashCard: React.Dispatch<React.SetStateAction<FlashCard[]>>;
};

const Context = createContext<FlashCardContextType | undefined>(undefined);

export function FlashCardProvider({ children }: { children: React.ReactNode }) {
  const [flashCard, setFlashCard] = useState<FlashCard[]>([]);

  return (
    <Context.Provider value={{ flashCard, setFlashCard }}>
      {children}
    </Context.Provider>
  );
}

export function FlashCardContext() {
  const context = useContext(Context);
  if (!context) {
    throw new Error(
      "useFlashCardContext must be used within a FlashCardProvider"
    );
  }
  return context;
}

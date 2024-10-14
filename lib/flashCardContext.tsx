import { createContext, useContext, useState } from "react";

const Context = createContext(undefined);

export function FlashCardProvider({ children }: { children: React.ReactNode }) {
  const [flashCard, setFlashCard] = useState([]);

  return (
    <Context.Provider value={{ flashCard, setFlashCard }}>
      {children}
    </Context.Provider>
  );
}

export function FlashCardContext() {
  const context = useContext(Context);
  return context;
}

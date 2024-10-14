import { createContext, useState } from "react";

const Context = createContext(null);

export function FlashCardProvider({ children }) {
  const [flashCard, useFlashCard] = useState([]);

  return (
    <Context.Provider value={{ flashCard, useState }}>
      {children}
    </Context.Provider>
  );
}

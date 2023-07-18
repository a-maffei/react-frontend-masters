import { createContext, useState } from "react";

export const PuppyContext = createContext();

export const PuppyProvider = ({ children }) => {
  const puppy = useState(null);

  return (
    <PuppyContext.Provider value={puppy}>{children}</PuppyContext.Provider>
  );
};

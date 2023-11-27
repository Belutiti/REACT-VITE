import { createContext, useState } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [theme, setTheme]= useState(false)
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={{
      theme: theme, 
      setTheme: setTheme
      }}>
      {children}
    </ContextGlobal.Provider>
  );
};

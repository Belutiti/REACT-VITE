import { createContext, useEffect, useMemo, useState } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [theme, setTheme]= useState(false)

  useMemo(()=>{
    localStorage.setItem('theme',JSON.stringify(theme))
  }, [theme])

  useEffect(()=>{
    JSON.parse(localStorage.getItem('theme'))
  }, [])

  return (
    <ContextGlobal.Provider value={{
      theme: theme, 
      setTheme: setTheme
      }}>
      {children}
    </ContextGlobal.Provider>
  );
};

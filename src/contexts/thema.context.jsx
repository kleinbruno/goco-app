import {createContext, useState} from 'react';

export const ThemaContext = createContext();

export function ThemaProvider({children}) {
  const [thema, setThema] = useState('light');

  return (
    <ThemaContext.Provider
      value={{
        thema,
        setThema,
      }}>
      {children}
    </ThemaContext.Provider>
  );
}

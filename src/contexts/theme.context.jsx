import React from 'react';
import {createContext, useState} from 'react';
import {ligthColorPalette, darkColorPalette} from '../colors';

export const ThemeContext = createContext();

export function ThemeProvider({children}) {
  const [theme, setTheme] = useState('light'); // usar enum

  const themes = {
    light: ligthColorPalette,
    dark: darkColorPalette,
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        selectedTheme: themes[theme],
      }}>
      {children}
    </ThemeContext.Provider>
  );
}

import React from 'react';
import {createContext, useState} from 'react';
import {ligthColorPalette, darkColorPalette} from '../colors';
import {themeEnum} from '../enums';

export const ThemeContext = createContext();

export function ThemeProvider({children}) {
  const [theme, setTheme] = useState(themeEnum.LIGHT);

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

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { DefaultTheme } from 'styled-components';
import { darkTheme, lightTheme } from './index';

interface ThemeContextType {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const THEME_KEY = '@Portfolio:theme';

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(() => {
    const storedTheme = localStorage.getItem(THEME_KEY);
    return storedTheme === 'light' ? lightTheme : darkTheme;
  });

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme.title);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme.title === 'light' ? darkTheme : lightTheme);
  };

  return React.createElement(ThemeContext.Provider, { value: { theme, toggleTheme } }, children);
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
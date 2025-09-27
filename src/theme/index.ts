import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    COLORS: {
      BACKGROUND_900: string;
      TEXT: string;
      CAPTION_500: string;
      CAPTION_400: string;
      CAPTION_300: string;
      SHAPE: string;
      PRIMARY: string;
      SECONDARY: string;
      ACCENT: string;
      SUCCESS: string;
      OVERLAY: string;
    };
    FONT_FAMILY: {
      REGULAR: string;
      BOLD: string;
    };
  }
}

export const darkTheme: DefaultTheme = {
  title: 'dark',
  COLORS: {
    BACKGROUND_900: '#2A1B3D',
    TEXT: '#F8F7FF',
    CAPTION_500: '#A4B3D3',
    CAPTION_400: '#8474A1',
    CAPTION_300: '#665687',
    SHAPE: '#44355B',
    PRIMARY: '#FFD93D',
    SECONDARY: '#7A4EBE',
    ACCENT: '#FFC107',
    SUCCESS: '#44B700',
    OVERLAY: 'rgba(42, 27, 61, 0.8)'
  },
  FONT_FAMILY: {
    REGULAR: "'Regular', sans-serif",
    BOLD: "'Bold', sans-serif"
  }
};

export const lightTheme: DefaultTheme = {
  title: 'light',
  COLORS: {
    BACKGROUND_900: '#F8F7FF',
    TEXT: '#2A1B3D',
    CAPTION_500: '#665687',
    CAPTION_400: '#8474A1',
    CAPTION_300: '#A4B3D3',
    SHAPE: '#E8E5EF',
    PRIMARY: '#7A4EBE',
    SECONDARY: '#FFD93D',
    ACCENT: '#FFC107',
    SUCCESS: '#44B700',
    OVERLAY: 'rgba(248, 247, 255, 0.8)'
  },
  FONT_FAMILY: {
    REGULAR: "'Regular', sans-serif",
    BOLD: "'Bold', sans-serif"
  }
};

// add re-exports for convenience and consistent imports
export { ThemeProvider, useTheme } from './ThemeContext';
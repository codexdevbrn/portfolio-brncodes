import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.TEXT};
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyle;
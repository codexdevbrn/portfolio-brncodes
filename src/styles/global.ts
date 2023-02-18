import { createGlobalStyle } from 'styled-components';
import {THEME} from '../theme';

export default createGlobalStyle`
p {
    color: ${THEME.COLORS.TEXT};
}
body {
    height: 100vh;
    margin: 0;
    background: ${THEME.COLORS.BACKGROUND_900};
    font-size: 14px;;
}

button {
    cursor: pointer;
  }
`;
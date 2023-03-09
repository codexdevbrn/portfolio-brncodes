import { createGlobalStyle } from 'styled-components';
import {THEME} from '../theme';

const GlobalStyle = createGlobalStyle`
    p {
        color: ${THEME.COLORS.TEXT};
    }
    body {
        height: 100%;
        margin: 0;
        padding: 0;
        background: ${THEME.COLORS.BACKGROUND_900};
        font: 14px 'Ubuntu', sans-serif;
        scrollbar-width: none;
        overflow-y: scroll;
    }
    body::-webkit-scrollbar {
        display: none;
    }
    button {
        cursor: pointer;
    }

    ul {
        padding-inline-start: 0px;
    }
`;
export default GlobalStyle;
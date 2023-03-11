import { createGlobalStyle } from 'styled-components';
import {THEME} from '../theme';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
    p {
        color: ${THEME.COLORS.TEXT};
    }
    body {
        height: 100vh;
        background: ${THEME.COLORS.BACKGROUND_900};
        font: 14px 'Ubuntu', sans-serif;
        scrollbar-width: none;
        overflow-y: scroll;
        display: grid;
        grid-template-areas:
        'header'
        'main'
        'footer'; 
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
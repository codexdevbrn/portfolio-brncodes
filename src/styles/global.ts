import { createGlobalStyle } from 'styled-components';
import {THEME} from '../theme';
import backgroundImage from '../assets/background.png'

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
        background: ${THEME.COLORS.BACKGROUND_900} url(${backgroundImage}) no-repeat bottom right / 600px;
        background-attachment: fixed;
        font: 14px 'Ubuntu', sans-serif;
        scrollbar-width: none;
        overflow-y: scroll;
        display: grid;
        grid-template-areas:
        'header'
        'main'
        'footer'; 
        
        @media (max-width : 1000px){
            background: ${THEME.COLORS.BACKGROUND_900} url(${backgroundImage}) no-repeat bottom right / 400px;
            background-attachment: fixed;
        }

        @media (max-height: 900px){
            background: ${THEME.COLORS.BACKGROUND_900} url(${backgroundImage}) no-repeat bottom right / 400px;
            background-attachment: fixed;
        }
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
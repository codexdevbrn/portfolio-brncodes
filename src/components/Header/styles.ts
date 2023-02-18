import styled from 'styled-components';
import { THEME } from '../../theme';

export const Container = styled.header`
    display: flex;
    position: relative;
    z-index: 1;
    align-content: center;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
    flex-direction: row;

    a{
    & + a {
        margin-left: 20px;
    }
    }

`;

export const Buttons = styled.a`
    color: ${THEME.COLORS.TEXT};
    text-decoration: none;
    font-family: 'Ubuntu', sans-serif;
    margin-top: 20px;
    font-size: 20px;
`;
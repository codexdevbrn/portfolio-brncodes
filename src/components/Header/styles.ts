import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { THEME } from '../../theme';

export const Container = styled.header`
    display: flex;
    position: fixed;
    z-index: 1;
    padding-bottom: 10px;
    align-content: center;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
    
    flex-direction: row;
    background-color: ${THEME.COLORS.SHAPE};

    a {
    & + a {
        margin-left: 20px;
     }
    }
`;

export const Buttons = styled(NavLink)`
    color: ${THEME.COLORS.TEXT};
    text-decoration: none;
    margin-top: 20px;
    font-size: 20px;

    @media (max-width: 500px) { 
            font-size: 16px;
    }
`;

export const Navbar = styled.nav`
    display: flex;
    align-items: center;
`;
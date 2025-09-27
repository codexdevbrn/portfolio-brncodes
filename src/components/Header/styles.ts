import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.header`
    display: flex;
    position: fixed;
    grid-area: header;
    z-index: 1;
    align-items: center;
    justify-content: center;
   
    width: 100vw;
    height: 6vh;

    flex-direction: row;
    background-color: ${({ theme }) => theme.COLORS.SHAPE};

    .responsive {
        transform: translateY(100vh);
    }
    .close-btn {
        position: absolute;
		top: 2rem;
		right: 2rem;
    }

    @media (max-width: 1024px) {
        justify-content: flex-end;
        padding-right: auto;
    }

`;
export const Buttons = styled(NavLink)`
    color: ${({ theme }) => theme.COLORS.TEXT};
    text-decoration: none;
    font-size: 20px;
    margin: 0.95rem;
`;
export const Navbar = styled.nav`
    display: flex;
    align-items: center;

    @media (max-width: 1024px) {
       position: fixed;
       top: -100vh;
       right: 0;
       height: 100vh;
       width: 30%;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       gap: 1.5rem;
       background-color: ${({ theme }) => theme.COLORS.SHAPE};
       transition: 2s;
       transform: translateY(-100vh);
        
    }
`;
export const ButtonResp = styled.button`
    padding: auto;
    background-color: transparent;
    border: none;
    outline: none;
    visibility: hidden;
    opacity: 0;

    svg {
        margin-right: 2.5vw;
        background-color: ${({ theme }) => darken(0.05, theme.COLORS.PRIMARY)};
        border-radius: 10%;
        
    }

    @media (max-width: 1024px) {
        visibility: visible;
        opacity: 1;
        
    }
`;
export const SomeButton = styled.button`
  color: ${({ theme }) => theme.COLORS.SUCCESS};
  background: ${({ theme }) => theme.COLORS.PRIMARY};
  &:hover { background: ${({ theme }) => darken(0.05, theme.COLORS.PRIMARY)}; }
`;
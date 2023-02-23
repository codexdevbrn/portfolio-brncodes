import styled from "styled-components";
import { caroseul, backgroundCard  } from "../../styles/keyframes";
import { THEME } from "../../theme";

export const Container = styled.div`
    display: flex;
    background: linear-gradient(180deg, ${THEME.COLORS.OVERLAY},${THEME.COLORS.PRIMARY},${THEME.COLORS.OVERLAY});
    background-size: 400% 400%;
    height: auto;
    border-radius: 10px;
    width: 80%;
    margin: 30px 0px 20px 0px;
    padding-right: 40px;
    position: relative;
    align-items: center;
    justify-content: center;
    justify-items: center;
    box-shadow: 0 5px 2px rgba(0,0,0, .1);
    animation: ${backgroundCard} 0.85s ease normal;
    transition: all ease-in-out 0.25s;

    li {
        + li{
            margin-left: 50px;
        }
    }

    svg {
        width: 60px;
        height: 50px;
    }

    @media (max-width: 1000px) { 
        display: grid;
        grid-template-columns: repeat(4, 0.2fr);

        svg {
            animation: ${caroseul} 5s linear;
        }
    }

    @media (max-width: 500px) { 
        grid-template-columns: repeat(3, 0.2fr);

        svg {
            width: 40px;
            height: 60px;
            animation: ${caroseul} 5s linear;
        }
     
        p {
            font-size: 16px;
        }
    }        
    @media (max-width: 400px) {
        grid-template-columns: repeat(2, 0.2fr);

        svg {
            animation: ${caroseul} 5s linear;
        }

    }
    @media (max-width: 200px) {
        grid-template-columns: repeat(1, 0.2fr);
        svg {
            animation: ${caroseul} 2s linear;
        }
    }

    @media (max-height: 600px) {
        grid-template-columns: repeat(4, 0.2fr);
        svg {
            width: 40px;
            animation: ${caroseul} 2s linear;
        }
    }

`;

export const ListContainer = styled.li`
    list-style: none;
    position: relative;
    flex-direction: column;
    margin-top: 10px;
    align-content: center;
    align-items: center;
    justify-content: center;
    display: flex;
    font-weight: bold;
    animation: ${caroseul} 5s linear;
`;
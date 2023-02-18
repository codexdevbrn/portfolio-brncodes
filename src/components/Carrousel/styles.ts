import styled from "styled-components";
import { THEME } from "../../theme";

export const Container = styled.div`
    display: flex;
    background-color: ${THEME.COLORS.OVERLAY};
    height: auto;
    border-radius: 10px;
    width: 80%;
    padding-right: 30px;
    margin-top: 30px;
    position: relative;
    align-items: center;
    justify-content: center;
    justify-items: center;

    li{
        + li{
            margin-left: 50px;
        }
    }
    svg {
        width: 50px;
        height: 60px;
    }

    @media (max-width: 1000px) { 
        display: grid;
        grid-template-columns: repeat(4, 0.2fr);

        svg {
            width: 50px;
            height: 60px;
        }
    }

    @media (max-width: 500px) { 
        grid-template-columns: repeat(3, 0.2fr);
        svg {
            width: 40px;
            height: 60px;
        }
        p {
            font-size: 16px;
        }

    }
    @media (max-width: 400px) {
        grid-template-columns: repeat(2, 0.2fr);
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
    font-family: 'Ubuntu', sans-serif;
    font-weight: bold;
`;
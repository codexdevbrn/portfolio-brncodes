import styled from "styled-components";
import { THEME } from "../../theme";

export const BoxTitle = styled.div`
    background-color: ${THEME.COLORS.SHAPE};
    width: 80vw;
    height: 5vh;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    position: relative;
    display: flex;
    letter-spacing: 3px;
    padding: 22px;
    box-sizing: border-box;
    box-shadow: 0px 5px 3px rgba(0,0,0, 1);

    @media (max-height: 500px) {
        height: 16vh;
        padding: 0px;
    }

    @media (max-height: 400px) {
        height: 12vh;
        padding: 0px;
    }

    @media (max-height: 300px) {
        height: 8vh;
        padding: 0px;
    }
`; 
export const Title = styled.h1`
    position: relative;
    color: ${THEME.COLORS.TEXT};
    font-size: 22px;

    @media (max-width: 200px) {
        font-size: 10px;
    }

    @media (max-height: 700px) {
        font-size: 20px;
    }
`;
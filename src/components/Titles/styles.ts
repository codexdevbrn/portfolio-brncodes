import styled from "styled-components";
import { THEME } from "../../theme";

export const BoxTitle = styled.div`
    background-color: ${THEME.COLORS.SHAPE};
    width: 80%;
    height: 5vh;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-top: 30px;
    letter-spacing: 3px;

    @media (max-height: 400px) {
        height: 14vh;
    }
`; 

export const Title = styled.h1`
    color: ${THEME.COLORS.TEXT};

    @media (max-width: 200px) {
   font-size: 16px;
}
`;
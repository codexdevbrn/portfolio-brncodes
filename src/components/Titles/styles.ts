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
    padding: 5px;
    box-shadow: 0px 5px 3px rgba(0,0,0, 1);

    @media (max-height: 400px) {
        height: 14vh;
        padding: 0px;
    }
`; 

export const Title = styled.h1`
    color: ${THEME.COLORS.TEXT};

    @media (max-width: 200px) {
   font-size: 16px;
}

@media (max-height: 700px) {
   font-size: 20px;
}
`;
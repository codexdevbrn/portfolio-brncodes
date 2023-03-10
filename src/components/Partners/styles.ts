import styled from "styled-components";
import { caroseul } from "../../styles/keyframes";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    justify-content: center;
    

    ul {
        padding-inline-start: 0px;
    }
    @media (max-width: 500px){
        flex-direction: column;
        grid-template-columns: repeat(2, 0.2fr);
        
        ul {
            & + ul { padding-inline-start: 0px;}
        }
    }

    @media (max-width: 500px){
        flex-direction: column;
        grid-template-columns: repeat(1, 0.2fr);
    }
`;
export const ListContainer = styled.li`
    list-style: none;
    position: relative;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 10px;
    align-content: center;
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
    font-weight: bold;
    animation: ${caroseul} 3s linear;
    padding: 20px 40px;
    
    p {
        letter-spacing: 3px;
        width: 95%;
        padding-top: 1vh;
        align-items: center;
    }
    `;

export const Images = styled.img`
    width: 180px;

    @media (max-width: 700px) {
        width: 90px;
    }
`;
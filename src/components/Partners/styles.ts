import styled from "styled-components";
import { caroseul } from "../../styles/keyframes";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    justify-content: center;

    @media (max-width: 500px){
        flex-direction: column;
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
    
    p {
        letter-spacing: 3px;
        width: 90%;
        align-items: center;
    }
    @media (max-width: 700px) {
        img{
            width: 90px;
        }
    }
    `;

export const Images = styled.img`
    width: 120px;
`;
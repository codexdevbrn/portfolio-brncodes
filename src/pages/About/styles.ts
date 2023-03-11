import styled from "styled-components";
import { motion } from 'framer-motion';
import { THEME } from "../../theme";
import { opacity } from "../../styles/keyframes";

export const Container = styled(motion.div)`
    display: flex;
    grid-area: main;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    box-sizing: border-box;
    padding-top: 10vh;
    padding-bottom: 10vh;
    position: relative;
`;
export const TextContainer = styled.div`
    display: flex;
    background: ${THEME.COLORS.OVERLAY};
    height: auto;
    border-radius: 10px;
    width: 80vw;
    margin-top: 10px;
    padding-bottom: 100px;
    box-sizing: border-box;
    position: relative;
    align-items: center;
    justify-content: center;
    justify-items: center;
    box-shadow: 0 5px 3px rgba(0,0,0, 1);
    flex-direction: column;
    align-items: flex-start;
`;
export const Text = styled.p`
    color: ${THEME.COLORS.TEXT};
    position: relative;
    margin: 30px 40px 0px 40px;
    font-size: 18px;
    font-weight: 500;
    animation: ${opacity} 3s ease-in-out;
`;
export const PartContainer = styled.div`
    display: flex;
    background: ${THEME.COLORS.OVERLAY};
    border-radius: 10px;
    width: 80%;
    height: auto;
    position: relative;
    align-items: center;
    justify-content: center;
    justify-items: center;
    box-shadow: 0 5px 3px rgba(0,0,0, 1);

    @media (max-width: 700px) {
        display: grid;
        width: 80%;
    }

    @media (max-width: 500px) {
        flex-direction: column;
    }
`;
export const PartTitle = styled.h2`
    color: ${THEME.COLORS.CAPTION_400};
    text-align: center;
    animation: ${opacity} 1s;
    width: 100%;
    height: 40%;
    padding: 20px 0px;
    box-sizing: border-box;

    @media (max-width: 700px) {
        font-size: 18px;
    }
    @media (max-width: 400px) {
        font-size: 14px;
    }
`;


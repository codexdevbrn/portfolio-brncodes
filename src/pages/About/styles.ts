import styled from "styled-components";
import { motion } from 'framer-motion';
import { THEME } from "../../theme";
import { opacity } from "../../styles/keyframes";

export const Container = styled(motion.div)`
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;
    width: 100%;
    position: relative;
    padding-top: 60px;
`;

export const TextContainer = styled.div`
    display: flex;
    background: ${THEME.COLORS.FOOTER};
    height: auto;
    border-radius: 10px;
    width: 80%;
    margin: 30px 0px 60px 0px;
    padding-bottom: 100px;
    position: relative;
    align-items: center;
    justify-content: center;
    justify-items: center;
    box-shadow: 0 5px 3px rgba(0,0,0, 1);
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 500px) {
       margin: 30px 0px 90px 0px;
    }
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
    background: ${THEME.COLORS.FOOTER};
    height: auto;
    border-radius: 10px;
    width: 80%;
    margin: 30px 0px 60px 0px;
    padding-bottom: 50px;
    position: relative;
    align-items: center;
    justify-content: center;
    justify-items: center;
    box-shadow: 0 5px 3px rgba(0,0,0, 1);
    align-items: center;

    @media (max-width: 700px) {
        display: grid;
        grid-template-columns: repeat(2, 0.2fr);
    }

    @media (max-width: 500px) {
        flex-direction: column;
        grid-template-columns: repeat(2, 0.2fr);
    }
`;

export const PartTitle = styled.h2`
    color: ${THEME.COLORS.CAPTION_400};
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
    animation: ${opacity} 1s;

    @media (max-width: 700px) {
        font-size: 18px;
    }
`;


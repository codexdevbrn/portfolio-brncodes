import styled from "styled-components";
import { motion } from 'framer-motion';
import { THEME } from "../../theme";

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

export const TitleContainer = styled.div`
    display: flex;
    background: ${THEME.COLORS.OVERLAY};
    height: auto;
    border-radius: 10px;
    width: 80%;
    margin: 30px 0px 60px 0px;
    position: relative;
    align-items: center;
    justify-content: center;
    justify-items: center;
    box-shadow: 0 5px 2px rgba(0,0,0, .1);

    @media (max-width: 500px) {
       margin: 30px 0px 90px 0px;
    }
`;
export const Text = styled.p`
color: ${THEME.COLORS.TEXT};
position: relative;
margin: 30px 40px 100px 40px;
margin-bottom: 100px;
font-size: 18px;
font-weight: 500;
line-height: 25px;
`;


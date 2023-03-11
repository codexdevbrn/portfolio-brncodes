import styled from "styled-components";
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    grid-area: main;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding-top: 10vh;
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    position: relative;
`;
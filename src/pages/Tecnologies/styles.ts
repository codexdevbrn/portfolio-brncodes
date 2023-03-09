import styled from "styled-components";
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    display: flex;
    align-content: center;
    justify-content: first baseline;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    position: relative;
    padding-top: 60px;
    box-sizing: border-box;
`;
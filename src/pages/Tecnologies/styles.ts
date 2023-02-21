import styled from "styled-components";
import {motion} from 'framer-motion';

export const Container = styled(motion.div)`
    display: flex;
    align-content: center;
    justify-content: first baseline;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    position: relative;
    padding-top: 90px;
`;
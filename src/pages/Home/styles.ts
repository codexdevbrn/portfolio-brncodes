import styled from 'styled-components';
import { motion } from 'framer-motion';
import { THEME } from '../../theme'
import { pulse, slide, opacity } from '../../styles/keyframes';

export const Container = styled(motion.div)`
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    position: relative;

    > div {
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
    }
    @media (max-width: 500px) {
        h1{
            font-size: 30px;
        }
        h2 {
            font-size: 16px;
        }
    }

    @media (max-width: 400px) {
        img {
            width: 150px;
            transition: all 0.10s ;
        }
        h1 {
            font-size: 20px;
        }
        h2 {
            font-size: 15px;
        }
    }

    @media (max-width: 300px) {
        img {
            width: 100px;
            transition: all 0.10s ;
        }
        h1 {
            font-size: 16px;
        }
        h2 {
            font-size: 16px;
        }
        span {
            font-size: 10px;
            margin-left: -5px;
        }
        svg {
            width: 40px;
    }
    }

`;
export const Adjust = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;

    @media (max-height: 600px) {
        flex-direction: row;
        margin-bottom: 20px;
    }
    @media (max-height: 400px) {
        margin-top: 10vh;
        h1 {
            margin-left: 60px;
            font-size: 32px;
        }
    }
`;

export const Photo = styled.img`
    border-radius: 50%;
    max-width: 180px;
    box-shadow: 0 0 0 0 ${THEME.COLORS.PRIMARY};
    transform: scale(1);
    animation: ${pulse} 2s backwards;

    @media (max-height: 700px) {
        max-width: 160px; 
    }
    @media (max-height: 400px) {
       max-width: 100px;
    }
`;

export const Name = styled.h1`
    color: ${THEME.COLORS.TEXT};
    letter-spacing: 2px;
    text-align: center;
    margin-top: 40px;
    font-size: 40px;
    animation: ${opacity} 1s;

    @media (max-height: 600px) {
        font-size: 28px;
        margin-left: 30px;
    }
`;

export const Bio = styled.h2`
    color: ${THEME.COLORS.CAPTION_400};
    letter-spacing: 2px;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
    animation: ${opacity} 1s;

    @media (max-height: 700px) {
        font-size: 20px;
    }
    @media (max-height: 400px) {
        h1 {
            margin-left: 60px;
            font-size: 32px;
        }
    }
`;

export const Stats = styled.span`
 color: ${THEME.COLORS.PRIMARY};
 font-size: 16px;
 margin-left: 5px ;
 text-align: center;
 font-weight: lighter;

 @media (max-height: 700px) {
    @media (max-height: 700px) {
        font-size: 12px;
    }
}
`;

export const ButtContainer = styled.div`
    display: flex;
    animation: ${slide} 1s linear;
    margin-top: 20px;
    align-content: center;
    align-items: center;
    justify-content: center;

    @media (max-width: 200px) {
        flex-direction: column;
        transition: 1s;
    }
    @media (max-height: 400px) {
        margin-top: 0px;
        transition: 1s;
    }
    @media (max-height: 300px) {
        flex-direction: row;
        transition: 1s;
    }
`;
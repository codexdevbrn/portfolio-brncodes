import styled from 'styled-components';
import { motion } from 'framer-motion';
import { THEME } from '../../theme'
import { pulse, slide, opacity } from '../../styles/keyframes';

export const Container = styled(motion.main)`
    grid-area: main;
    align-content: center;
    align-items: center;
    justify-items: center;
    padding-top: 20vh;
    box-sizing: border-box;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
   
    > div {
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;

        span {
            color: ${THEME.COLORS.PRIMARY};
            font-size: 18px;
            font-weight: 600;
            margin-left: 5px ;
            text-align: center;
            
        }
        a {
            color: ${THEME.COLORS.PRIMARY};
            font-size: 18px;
            margin-left: 5px ;
            text-align: center;
            font-weight: 600;
            text-decoration: none;
        }
        @media (max-height: 700px) {
            font-size: 12px;
        }

    }
`;
export const Adjust = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100vw;
    justify-items: center;
    align-items: center;

    @media (max-width: 500px){
        padding-top: 15%;
    }

    @media (max-height: 900px) {
        flex-direction: row;
        
    }
`;
export const More = styled.div`
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    margin-top: 20px;

    @media (max-height: 700px) {
        font-size: 16px;
    }
`;
export const Photo = styled.img`
    border-radius: 100%;
    max-width: 180px;
    box-shadow: 0 0 0 0 ${THEME.COLORS.PRIMARY};
    transform: scale(1);
    animation: ${pulse} 2s backwards;

    @media (max-width: 800px){
        max-width: 140px;
    }
    @media (max-width: 500px){
        max-width: 120px;
    } 

`;
export const Name = styled.h1`
    color: ${THEME.COLORS.TEXT};
    letter-spacing: 2px;
    margin-top: 30px;
    padding: 0px 50px;
    box-sizing: border-box;
    text-align: center;
    font-size: 40px;
    animation: ${opacity} 1s;

    @media (max-width: 500px){
        padding: 0px 25px;
        font-size: 30px;
    }
   
    @media (max-width: 400px) {
        font-size: 20px;
    }

    @media (max-width: 300px) {
        font-size: 16px;
    }
   
`;
export const Bio = styled.h2`
    color: ${THEME.COLORS.CAPTION_400};
    letter-spacing: 2px;
    text-align: center;
    animation: ${opacity} 1s;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 25px;
    font-weight: 700;

    @media (max-width: 700px) {
        font-size: 25px;
    }

    @media (max-width: 500px) {
        font-size: 20px;
    }

    @media (max-width: 400px) {
        font-size: 15px; 
    }

    @media (max-height: 700px) {
        font-size: 15px;
    }

`;
export const ButtContainer = styled.div`
    display: flex;
    animation: ${slide} 1s linear;
    align-content: center;
    box-sizing: border-box;
    padding-top: 5vh;
    padding-bottom: 15vh;
    align-items: center;
    justify-content: center;

    h2 {
        color: ${THEME.COLORS.CAPTION_400};
        letter-spacing: 2px;
        text-align: center;
        animation: ${opacity} 1s;

        @media (max-height: 700px) {
            font-size: 20px;
        }

        @media (max-width: 700px) {
        font-size: 25px;
        }

        @media (max-width: 500px) {
            font-size: 20px;
        }

        @media (max-width: 400px) {
            font-size: 15px; 
        }

        @media (max-height: 700px) {
            font-size: 15px;
        }

    }

    @media (max-width: 200px) {
        flex-direction: column;
        transition: 1s;
    }
    @media (max-height: 1000px) {
        transition: 1s;
        margin-top: 10px;
    }
`;
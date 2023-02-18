import styled from 'styled-components';
import {THEME} from '../../theme'

export const Container = styled.section`
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    position: relative;
    padding-top: 80px;

    > div {
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 400px) {
        img {
            width: 150px;
            transition: all 0.10s ;
        }
        h1 {
            font-size: 30px;
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
            font-size: 12px;
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

export const Photo = styled.img`
    border-radius: 50%;
    max-width: 180px;
    box-shadow: 0em 0 3em ${THEME.COLORS.PRIMARY};
`;

export const Name = styled.h1`
    color: ${THEME.COLORS.TEXT};
    font-family: 'Ubuntu', sans-serif;
    letter-spacing: 2px;
    text-align: center;
    margin-top: 40px;
`;

export const Bio = styled.h2`
    color: ${THEME.COLORS.CAPTION_400};
    font-family: 'Ubuntu', sans-serif;
    letter-spacing: 2px;
    text-align: center;

`;

export const Stats = styled.span`
 color: ${THEME.COLORS.PRIMARY};
 font-family: 'Ubuntu', sans-serif;
 font-size: 16PX;
 margin-left: 5px ;
 text-align: center;
 font-weight: bold;
`;

export const ButtContainer = styled.div`
    margin-top: 50px;
`;

export const Button = styled.a`
padding: 10px;
`;
import { keyframes } from "styled-components";
import { bounceIn,  } from 'react-animations';

export const slide = keyframes`
    from {
        opacity: 0;
        transform: translate(20px);
    }
    to {
       opacity: 1;
    }
`;
export const pulse = keyframes`
    0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(139, 92, 246, 1);
    }
     70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(139, 92, 246, 1);
  }
  
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(139, 92, 246, 1);
  }
`; 

export const opacity = keyframes`
    from {
        opacity: 0.1;
    }
    to {
        opacity: 1;
    }
`;

export const caroseul = keyframes`
    ${bounceIn}
`;

export const backgroundCard = keyframes`
    0%{
        background-position:51% 100%;
    }
    50%{
        background-position:51% 50%;
    }
    100%{
        background-position:51% 0%;
        }
`;


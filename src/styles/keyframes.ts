import { keyframes } from "styled-components";

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

import styled from "styled-components";

export const Button = styled.a`
padding: 10px;
display: flex;

&:hover {
      transform: translateY(-10px);
      transition-duration: 0.5s;
    }
    svg{
        width: 100px;
        height: 80px;
    }
@media (max-width: 500px) {
        svg{
            width: 40px;
            height: 40px;
        }
    }

@media (max-width: 400px) {
    svg{
        width: 50px;
        height: 30px;
        }
    }
`;

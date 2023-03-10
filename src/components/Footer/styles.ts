import styled from "styled-components";
import { THEME } from "../../theme";

export const Container = styled.footer`
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 5vh;
  bottom: 0;
  text-align: center;
  background: ${THEME.COLORS.OVERLAY};
  backdrop-filter: blur(2px);
  color: ${THEME.COLORS.TEXT};
  padding: 1.5vh;
  box-sizing: border-box;

  @media (max-height: 400px){
    padding-top: 0px;
  }
`;
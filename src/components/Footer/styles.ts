import styled from "styled-components";
import { THEME } from "../../theme";

export const Container = styled.footer`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 5vh;
  bottom: 0;
  background: ${THEME.COLORS.OVERLAY};
  backdrop-filter: blur(2px);
  text-align: center;
  color: ${THEME.COLORS.TEXT};
  padding-top: 10px;
`;
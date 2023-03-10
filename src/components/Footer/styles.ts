import styled from "styled-components";
import { THEME } from "../../theme";

export const Container = styled.footer`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 5%;
  bottom: 0;
  text-align: center;
  justify-content: space-around;
  background: ${THEME.COLORS.OVERLAY};
  backdrop-filter: blur(2px);
  color: ${THEME.COLORS.TEXT};
  padding: 10px;
`;
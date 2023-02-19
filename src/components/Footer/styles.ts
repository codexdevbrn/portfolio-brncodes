import styled from "styled-components";
import { THEME } from "../../theme";

export const Container = styled.footer`
  position: relative;
  width: 100%;
  height: 4vh;
  bottom: 0;
  background-color: ${THEME.COLORS.OVERLAY};
  text-align: center;
  color: ${THEME.COLORS.TEXT};
  font-family: 'Ubuntu', sans-serif;
  padding-top: 15px;
`
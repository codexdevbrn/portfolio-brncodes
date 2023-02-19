import styled from "styled-components";
import { THEME } from "../../theme";


export const Container = styled.footer`
  width: 100%;
  height: 4vh;
  background-color: ${THEME.COLORS.OVERLAY};
  position: flex;
  bottom: 0;
  text-align: center;
  color: ${THEME.COLORS.TEXT};
  font-family: 'Ubuntu', sans-serif;
  padding-top: 15px;
`
import styled from "styled-components"
import { CHButtonProps } from "../types/ch-button.type"

export const CHButton = styled.button<CHButtonProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.showTimes ? "transparent" : props.theme.colors.primary};
  border: none;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  overflow: hidden;
  outline: none;
`

import styled from "styled-components"

export const CHSend = styled.button`
  background-color: ${(props) =>
    props.disabled
      ? props.theme.colors.primaryGray
      : props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryWhite};
  border: none;
  outline: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;

  svg {
    transform: translateX(1px);
  }
`

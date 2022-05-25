import styled from "styled-components"

export const CHInput = styled.input`
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.primaryWhite};
  font-size: ${(props) => props.theme.fonts.sizes.sm};
  ::placeholder {
    color: ${(props) => props.theme.colors.primaryGray};
    font-size: ${(props) => props.theme.fonts.sizes.sm};
  }
  color: ${(props) => props.theme.colors.text.black};
  border: none;
  outline: none;
  margin: 0 15px;
  padding: 8px 15px;
  width: 100%;
  border-radius: ${(props) => props.theme.radius.input};
`

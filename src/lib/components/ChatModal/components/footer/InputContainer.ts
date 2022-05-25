import styled from "styled-components"

export const CHInputContainer = styled.form`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.radius.inputContainer};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 18px 0;
`

import styled from "styled-components"

export const CHInput = styled.input`
  border-radius: ${({ theme }) => theme.radius.leadInput};
  padding: 14px 0 16px 28px;
  background-color: ${({ theme }) => theme.colors.leadInputs.bg};
  border: none;
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.leadInputs.color};
    font-size: ${({ theme }) => theme.fonts.sizes.xs};
  }
`

import styled from "styled-components"
import { LeadStatusButton } from "../types/button.type"

export const CHLeadSubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 14px 0 16px 0;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  border-radius: ${({ theme }) => theme.radius.leadInput};
  color: ${({ theme }) => theme.colors.text.white};
  cursor: pointer;

  span {
    margin-right: 13px;
  }
`

export const CHLeadStatusButton = styled.button<LeadStatusButton>`
  background-color: ${(props) => {
    if (props.outlined) {
      return "transparent"
    } else {
      return props.theme.colors.selfMessageBackground
    }
  }};
  border: ${(props) => {
    if (props.outlined) {
      return `1px solid ${props.theme.colors.primaryGray}`
    } else {
      return "none"
    }
  }};
  color: ${({ theme }) => theme.colors.text.black};
  border-radius: ${({ theme }) => theme.radius.leadInput};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  padding: 9px 37px 13px 37px;
  cursor: pointer;
`

import styled from "styled-components"
import { IsSelfProps } from "../../types/message.type"

export const CHMessage = styled.li<IsSelfProps>`
  display: flex;
  justify-content: ${(props) => (props.isSelf ? "flex-end" : "flex-start")};
  width: 100%;
`

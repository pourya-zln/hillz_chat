import styled from "styled-components"
import { IsSelfProps } from "../../types/message.type"

export const CHMessageInfo = styled.div<IsSelfProps>`
  max-width: 290px;
  overflow-wrap: break-word;
  background-color: ${(props) =>
    props.isSelf
      ? props.theme.colors.selfMessageBackground
      : props.theme.colors.otherMessageBackground};
  border-radius: ${(props) =>
    props.isSelf
      ? props.theme.radius.selfMessage
      : props.theme.radius.otherMessage};
  padding: 15px 20px;
  margin-bottom: 10px;
`

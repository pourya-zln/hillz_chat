import styled from "styled-components"

export const CHChat = styled.div`
  position: fixed;
  right: ${(props) => props.theme.offset.x}px;
  bottom: ${(props) => props.theme.offset.y}px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`

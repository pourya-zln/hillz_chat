import styled from "styled-components"
import { AvatarProps } from "../types/message.type"

export const Avatar = styled.img<AvatarProps>`
  object-fit: cover;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`

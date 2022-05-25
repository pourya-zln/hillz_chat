import { HTMLAttributes } from "react"
import { Socket } from "socket.io-client"

export interface ChatModalProps extends HTMLAttributes<HTMLDivElement> {
  socket: Socket
}

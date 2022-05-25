import { HTMLAttributes } from "react"
import { ManagerOptions, SocketOptions } from "socket.io-client"
import { IDefaultTheme } from "../../../Theme/defaultTheme"

export interface ChatProps extends HTMLAttributes<HTMLDivElement> {
  connectionUri: string
  connectionOptions?: Partial<ManagerOptions & SocketOptions>
  theme?: Partial<IDefaultTheme>
  dealershipOrigin: string
  onButtonClick?: ChatProps["onClick"]
}

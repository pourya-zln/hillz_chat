import { HTMLAttributes, MouseEventHandler } from "react"
import { IDefaultTheme } from "../../../Theme/defaultTheme"

export interface ChatProps extends HTMLAttributes<HTMLDivElement> {
  theme?: Partial<IDefaultTheme>
  dealershipOrigin: string
  onButtonClick?: MouseEventHandler<HTMLButtonElement>
}

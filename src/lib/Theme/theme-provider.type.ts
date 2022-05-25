import { ReactNode } from "react"
import { IDefaultTheme } from "./defaultTheme"

export interface ThemeProviderProps {
  children: ReactNode
  theme?: Partial<IDefaultTheme>
}

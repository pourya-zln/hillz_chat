import "styled-components"
import { IDefaultTheme } from "./defaultTheme"

declare module "styled-components" {
  interface DefaultTheme extends IDefaultTheme {}
}

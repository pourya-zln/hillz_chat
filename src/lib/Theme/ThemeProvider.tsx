import React from "react"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { defaultTheme } from "./defaultTheme"
import { ThemeProviderProps } from "./theme-provider.type"

const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  return (
    <StyledThemeProvider theme={{ ...defaultTheme, ...theme }}>
      {children}
    </StyledThemeProvider>
  )
}

export default ThemeProvider

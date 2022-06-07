export interface IDefaultTheme {
  colors: {
    primary: string
    secondary: string
    primaryGray: string
    selfMessageBackground: string
    otherMessageBackground: string
    primaryWhite: string
    text: {
      white: string
      black: string
    }
    leadInputs: {
      bg: string
      color: string
    }
    primaryGradient: string
  }
  radius: {
    inputContainer: string
    input: string
    selfMessage: string
    otherMessage: string
    leadInput: string
  }
  offset: {
    x: number
    y: number
  }
  zIndex: number
  fonts: {
    sizes: {
      xs: string
      sm: string
      md: string
      lg: string
    }
  }
  headerBackgroundURL: string
  avatarDefault: string
}

const pxToRem = (value: number) => `${value / 16}rem`

export const defaultTheme: IDefaultTheme = {
  colors: {
    primary: "#124B96",
    secondary: "#EFF2F6",
    primaryGray: "#8793AA",
    selfMessageBackground: "#E2F2FF",
    otherMessageBackground: "#EFF2F6",
    primaryWhite: "#FFFFFF",
    text: {
      white: "#FFFFFF",
      black: "#101010",
    },
    leadInputs: {
      bg: "#EBEDF1",
      color: "#000000",
    },
    primaryGradient: "linear-gradient(to right, #0c458f, #3f78c9)",
  },
  radius: {
    inputContainer: "0 0 26px 26px",
    input: "7px",
    otherMessage: "30px 30px 30px 0px",
    selfMessage: "30px  0px 30px 30px",
    leadInput: "27px",
  },
  offset: {
    x: 30,
    y: 30,
  },
  zIndex: 99999,
  fonts: {
    sizes: {
      xs: pxToRem(18),
      sm: pxToRem(20),
      md: pxToRem(24),
      lg: pxToRem(45),
    },
  },
  headerBackgroundURL: "../assets/headerBg.svg",
  avatarDefault: "../assets/avatar.svg",
}

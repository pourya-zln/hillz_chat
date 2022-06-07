export interface IDefaultTheme {
    colors: {
        primary: string;
        secondary: string;
        primaryGray: string;
        selfMessageBackground: string;
        otherMessageBackground: string;
        primaryWhite: string;
        text: {
            white: string;
            black: string;
        };
        leadInputs: {
            bg: string;
            color: string;
        };
        primaryGradient: string;
    };
    radius: {
        inputContainer: string;
        input: string;
        selfMessage: string;
        otherMessage: string;
        leadInput: string;
    };
    offset: {
        x: number;
        y: number;
    };
    zIndex: number;
    fonts: {
        sizes: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
        };
    };
    headerBackgroundURL: string;
    avatarDefault: string;
}
export declare const defaultTheme: IDefaultTheme;

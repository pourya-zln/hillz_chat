"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTheme = void 0;
var headerBg_svg_1 = __importDefault(require("../assets/headerBg.svg"));
var avatar_svg_1 = __importDefault(require("../assets/avatar.svg"));
var pxToRem = function (value) { return "".concat(value / 16, "rem"); };
exports.defaultTheme = {
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
    headerBackgroundURL: headerBg_svg_1.default,
    avatarDefault: avatar_svg_1.default,
};

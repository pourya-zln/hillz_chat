"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = require("styled-components");
var defaultTheme_1 = require("./defaultTheme");
var ThemeProvider = function (_a) {
    var children = _a.children, theme = _a.theme;
    return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: __assign(__assign({}, defaultTheme_1.defaultTheme), theme) }, children));
};
exports.default = ThemeProvider;

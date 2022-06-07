"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHButton = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.CHButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  border: none;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  overflow: hidden;\n  outline: none;\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  border: none;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  overflow: hidden;\n  outline: none;\n"])), function (props) {
    return props.showTimes ? "transparent" : props.theme.colors.primary;
});
var templateObject_1;

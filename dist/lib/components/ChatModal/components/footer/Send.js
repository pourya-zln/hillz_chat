"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHSend = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.CHSend = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 15px;\n\n  svg {\n    transform: translateX(1px);\n  }\n"], ["\n  background-color: ", ";\n  color: ", ";\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 15px;\n\n  svg {\n    transform: translateX(1px);\n  }\n"])), function (props) {
    return props.disabled
        ? props.theme.colors.primaryGray
        : props.theme.colors.primary;
}, function (props) { return props.theme.colors.primaryWhite; });
var templateObject_1;

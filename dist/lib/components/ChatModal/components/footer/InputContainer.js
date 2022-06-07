"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHInputContainer = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.CHInputContainer = styled_components_1.default.form(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", ";\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 18px 0;\n"], ["\n  background-color: ", ";\n  border-radius: ", ";\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 18px 0;\n"])), function (props) { return props.theme.colors.secondary; }, function (props) { return props.theme.radius.inputContainer; });
var templateObject_1;

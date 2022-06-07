"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHInput = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.CHInput = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  background-color: ", ";\n  font-size: ", ";\n  ::placeholder {\n    color: ", ";\n    font-size: ", ";\n  }\n  color: ", ";\n  border: none;\n  outline: none;\n  margin: 0 15px;\n  padding: 8px 15px;\n  width: 100%;\n  border-radius: ", ";\n"], ["\n  box-sizing: border-box;\n  background-color: ", ";\n  font-size: ", ";\n  ::placeholder {\n    color: ", ";\n    font-size: ", ";\n  }\n  color: ", ";\n  border: none;\n  outline: none;\n  margin: 0 15px;\n  padding: 8px 15px;\n  width: 100%;\n  border-radius: ", ";\n"])), function (props) { return props.theme.colors.primaryWhite; }, function (props) { return props.theme.fonts.sizes.sm; }, function (props) { return props.theme.colors.primaryGray; }, function (props) { return props.theme.fonts.sizes.sm; }, function (props) { return props.theme.colors.text.black; }, function (props) { return props.theme.radius.input; });
var templateObject_1;

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
exports.CHInput = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: ", ";\n  padding: 14px 0 16px 28px;\n  background-color: ", ";\n  border: none;\n  outline: none;\n\n  ::placeholder {\n    color: ", ";\n    font-size: ", ";\n  }\n"], ["\n  border-radius: ", ";\n  padding: 14px 0 16px 28px;\n  background-color: ", ";\n  border: none;\n  outline: none;\n\n  ::placeholder {\n    color: ", ";\n    font-size: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.radius.leadInput;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.leadInputs.bg;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.leadInputs.color;
}, function (_a) {
    var theme = _a.theme;
    return theme.fonts.sizes.xs;
});
var templateObject_1;

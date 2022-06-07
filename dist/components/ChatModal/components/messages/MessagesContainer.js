"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHMessagesContainer = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.CHMessagesContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  min-height: 271px;\n"], ["\n  background-color: ", ";\n  min-height: 271px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primaryWhite;
});
var templateObject_1;

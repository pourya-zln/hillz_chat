"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHMessage = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.CHMessage = styled_components_1.default.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: ", ";\n  width: 100%;\n"], ["\n  display: flex;\n  justify-content: ", ";\n  width: 100%;\n"])), function (props) { return (props.isSelf ? "flex-end" : "flex-start"); });
var templateObject_1;

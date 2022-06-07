"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHHeader = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.CHHeader = styled_components_1.default.header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: url(", ") no-repeat;\n  height: 197px;\n  box-sizing: border-box;\n  display: flex;\n  padding: 25px;\n"], ["\n  background: url(", ") no-repeat;\n  height: 197px;\n  box-sizing: border-box;\n  display: flex;\n  padding: 25px;\n"])), function (props) { return props.theme.headerBackgroundURL; });
var templateObject_1;

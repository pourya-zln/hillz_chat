"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderTitle = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.HeaderTitle = styled_components_1.default.h3(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: ", ";\n  color: ", ";\n  margin-left: 36px;\n"], ["\n  font-size: ", ";\n  color: ", ";\n  margin-left: 36px;\n"])), function (props) { return props.theme.fonts.sizes.lg; }, function (props) { return props.theme.colors.text.white; });
var templateObject_1;

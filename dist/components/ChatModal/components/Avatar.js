"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Avatar = styled_components_1.default.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  object-fit: cover;\n  width: ", "px;\n  height: ", "px;\n"], ["\n  object-fit: cover;\n  width: ", "px;\n  height: ", "px;\n"])), function (props) { return props.size; }, function (props) { return props.size; });
var templateObject_1;

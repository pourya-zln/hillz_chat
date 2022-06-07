"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHChat = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.CHChat = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  right: ", "px;\n  bottom: ", "px;\n  display: flex;\n  align-items: flex-end;\n  flex-direction: column;\n"], ["\n  position: fixed;\n  right: ", "px;\n  bottom: ", "px;\n  display: flex;\n  align-items: flex-end;\n  flex-direction: column;\n"])), function (props) { return props.theme.offset.x; }, function (props) { return props.theme.offset.y; });
var templateObject_1;

"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHLeadStatusButton = exports.CHLeadSubmitButton = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.CHLeadSubmitButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 14px 0 16px 0;\n  border: none;\n  outline: none;\n  background-color: ", ";\n  text-transform: uppercase;\n  font-weight: normal;\n  font-size: ", ";\n  border-radius: ", ";\n  color: ", ";\n  cursor: pointer;\n\n  span {\n    margin-right: 13px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 14px 0 16px 0;\n  border: none;\n  outline: none;\n  background-color: ", ";\n  text-transform: uppercase;\n  font-weight: normal;\n  font-size: ", ";\n  border-radius: ", ";\n  color: ", ";\n  cursor: pointer;\n\n  span {\n    margin-right: 13px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.fonts.sizes.xs;
}, function (_a) {
    var theme = _a.theme;
    return theme.radius.leadInput;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text.white;
});
exports.CHLeadStatusButton = styled_components_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  color: ", ";\n  border-radius: ", ";\n  font-size: ", ";\n  padding: 9px 37px 13px 37px;\n  cursor: pointer;\n"], ["\n  background-color: ", ";\n  border: ", ";\n  color: ", ";\n  border-radius: ", ";\n  font-size: ", ";\n  padding: 9px 37px 13px 37px;\n  cursor: pointer;\n"])), function (props) {
    if (props.outlined) {
        return "transparent";
    }
    else {
        return props.theme.colors.selfMessageBackground;
    }
}, function (props) {
    if (props.outlined) {
        return "1px solid ".concat(props.theme.colors.primaryGray);
    }
    else {
        return "none";
    }
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text.black;
}, function (_a) {
    var theme = _a.theme;
    return theme.radius.leadInput;
}, function (_a) {
    var theme = _a.theme;
    return theme.fonts.sizes.sm;
});
var templateObject_1, templateObject_2;

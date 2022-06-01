"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatLead = void 0;
var react_1 = __importDefault(require("react"));
var components_1 = require("./components");
var Button_1 = require("./components/Button");
var Input_1 = require("./components/Input");
var leadButtonIcon_svg_1 = require("../../assets/leadButtonIcon.svg");
var NavigationContainer_1 = require("./components/NavigationContainer");
var ChatLead = function (_a) {
    var setShowLead = _a.setShowLead;
    return (react_1.default.createElement(components_1.CHForm, null,
        react_1.default.createElement(NavigationContainer_1.CHNavigationContainer, null,
            react_1.default.createElement(Button_1.CHLeadStatusButton, { outlined: true, type: 'button', onClick: function () {
                    setShowLead(false);
                } }, "Chat"),
            react_1.default.createElement(Button_1.CHLeadStatusButton, { type: 'button' }, "Lead")),
        react_1.default.createElement(Input_1.CHInput, { placeholder: 'First name' }),
        react_1.default.createElement(Input_1.CHInput, { placeholder: 'Last name' }),
        react_1.default.createElement(Input_1.CHInput, { placeholder: 'Email' }),
        react_1.default.createElement(Input_1.CHInput, { placeholder: 'Phone' }),
        react_1.default.createElement(Button_1.CHLeadSubmitButton, { type: 'submit' },
            react_1.default.createElement("span", null, "send"),
            react_1.default.createElement(leadButtonIcon_svg_1.ReactComponent, null))));
};
exports.ChatLead = ChatLead;
exports.default = exports.ChatLead;

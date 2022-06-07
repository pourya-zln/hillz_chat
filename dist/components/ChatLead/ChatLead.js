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
            react_1.default.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: '15.943', height: '15.899', viewBox: '0 0 15.943 15.899' },
                react_1.default.createElement("path", { id: 'send', d: 'M17.534,9.247,3.276,2.078A.844.844,0,0,0,2.082,3.114L4.073,8.451l9.081,1.513L4.073,11.478,2.082,16.814a.807.807,0,0,0,1.195.956L17.534,10.6A.757.757,0,0,0,17.534,9.247Z', transform: 'translate(-2.009 -1.994)', fill: '#fff' })))));
};
exports.ChatLead = ChatLead;
exports.default = exports.ChatLead;

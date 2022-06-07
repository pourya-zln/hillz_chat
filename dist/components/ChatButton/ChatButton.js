"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatButton = void 0;
var react_1 = __importDefault(require("react"));
var Button_1 = require("./components/Button");
var ChatButton = function (_a) {
    var icon = _a.icon, showTimes = _a.showTimes, props = __rest(_a, ["icon", "showTimes"]);
    return (react_1.default.createElement(Button_1.CHButton, __assign({ type: 'button', showTimes: showTimes }, props), showTimes ? (react_1.default.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: '71.002', height: '71.002', viewBox: '0 0 71.002 71.002' },
        react_1.default.createElement("path", { d: 'M39.5,4A35.5,35.5,0,1,0,75,39.5,35.5,35.5,0,0,0,39.5,4Zm16.45,45.677a4.437,4.437,0,1,1-6.275,6.275L39.5,45.776,29.326,55.951a4.437,4.437,0,0,1-6.275-6.275L33.226,39.5,23.051,29.326a4.437,4.437,0,0,1,6.275-6.275L39.5,33.226,49.677,23.051a4.437,4.437,0,0,1,6.275,6.275L45.776,39.5Z', transform: 'translate(-4 -4)', fill: '#8793aa' }))) : icon ? (icon) : (react_1.default.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: '71.002', height: '71.002', viewBox: '0 0 71.002 71.002' },
        react_1.default.createElement("g", { id: 'Bubble_double_round_speech_chat_icon', transform: 'translate(-3.416 7.004)' },
            react_1.default.createElement("path", { id: '_216170_delete_icon', "data-name": '216170_delete_icon', d: 'M39.5,4A35.5,35.5,0,1,0,75,39.5,35.5,35.5,0,0,0,39.5,4Z', transform: 'translate(-0.584 -11.004)', fill: 'rgba(18,75,150,0)' }),
            react_1.default.createElement("path", { id: 'Path_6', "data-name": 'Path 6', d: 'M38.916,7.69a20.228,20.228,0,0,0-.258,40.454V56.75L52.481,42.928A20.229,20.229,0,0,0,38.916,7.69Z', transform: 'translate(0)', fill: '#fff' }))))));
};
exports.ChatButton = ChatButton;
exports.default = exports.ChatButton;

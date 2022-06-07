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
var button_logo_svg_1 = require("../../assets/button-logo.svg");
var times_svg_1 = require("../../assets/times.svg");
var ChatButton = function (_a) {
    var icon = _a.icon, showTimes = _a.showTimes, props = __rest(_a, ["icon", "showTimes"]);
    return (react_1.default.createElement(Button_1.CHButton, __assign({ type: 'button', showTimes: showTimes }, props), showTimes ? react_1.default.createElement(times_svg_1.ReactComponent, null) : icon ? icon : react_1.default.createElement(button_logo_svg_1.ReactComponent, null)));
};
exports.ChatButton = ChatButton;
exports.default = exports.ChatButton;

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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
var react_1 = __importStar(require("react"));
var socket_1 = __importDefault(require("../../services/socket/socket"));
var ChatButton_1 = require("../ChatButton");
var ThemeProvider_1 = __importDefault(require("../../Theme/ThemeProvider"));
var ChatModal_1 = require("../ChatModal");
var Chat_1 = require("./components/Chat");
var Chat = function (_a) {
    var dealershipOrigin = _a.dealershipOrigin, onButtonClick = _a.onButtonClick, theme = _a.theme;
    var _b = (0, react_1.useState)(false), showChat = _b[0], setShowChat = _b[1];
    socket_1.default.on("session", function (_a) {
        var sessionId = _a.sessionId, userId = _a.userId;
        socket_1.default.auth = __assign(__assign({}, socket_1.default.auth), { sessionId: sessionId });
        sessionStorage.setItem("sessionId", sessionId);
        sessionStorage.setItem("userId", userId);
    });
    var handleClick = function (e) {
        setShowChat(function (prevShowChat) { return !prevShowChat; });
        socket_1.default.auth = {
            origin: dealershipOrigin,
            sessionId: sessionStorage.getItem("sessionId"),
        };
        socket_1.default.connect();
        onButtonClick && onButtonClick(e);
    };
    socket_1.default.on("connect_error", function (err) {
        console.log({ err: err });
    });
    return (react_1.default.createElement(ThemeProvider_1.default, { theme: theme },
        react_1.default.createElement(Chat_1.CHChat, null,
            showChat && react_1.default.createElement(ChatModal_1.ChatModal, null),
            react_1.default.createElement(ChatButton_1.ChatButton, { showTimes: showChat, onClick: handleClick }))));
};
exports.Chat = Chat;
exports.default = exports.Chat;

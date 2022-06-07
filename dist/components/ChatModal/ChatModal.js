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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatModal = void 0;
var react_1 = __importStar(require("react"));
var footer_1 = require("./components/footer");
var Container_1 = require("./components/Container");
var emoji_picker_react_1 = __importDefault(require("emoji-picker-react"));
var Header_1 = require("./components/header/Header");
var messages_1 = require("./components/messages");
var Avatar_1 = require("./components/Avatar");
var styled_components_1 = require("styled-components");
var HeaderTitle_1 = require("./components/header/HeaderTitle");
var ChatLead_1 = require("../ChatLead");
var socket_1 = __importDefault(require("../../services/socket"));
var ChatModal = function (props) {
    var socket = (0, react_1.useContext)(socket_1.default);
    var _a = (0, react_1.useState)(""), message = _a[0], setMessage = _a[1];
    var _b = (0, react_1.useState)(false), showEmoji = _b[0], setShowEmoji = _b[1];
    var _c = (0, react_1.useState)([]), messages = _c[0], setMessages = _c[1];
    var _d = (0, react_1.useState)(true), showLead = _d[0], setShowLead = _d[1];
    var inputRef = (0, react_1.useRef)(null);
    var messagesRef = (0, react_1.useRef)(null);
    var theme = (0, styled_components_1.useTheme)();
    var userId = sessionStorage.getItem("userId");
    var addEmoji = (0, react_1.useCallback)(function (_e, data) {
        var _a;
        var sym = data.unified.split("-");
        var codesArray = [];
        sym.forEach(function (val) { return codesArray.push("0x".concat(val)); });
        var emoji = String.fromCodePoint.apply(String, codesArray);
        setMessage(message + emoji);
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [message]);
    var handleShowEmoji = (0, react_1.useCallback)(function () {
        var _a;
        setShowEmoji(function (showEmojiPrev) { return !showEmojiPrev; });
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    var scrollToBottom = (0, react_1.useCallback)(function () {
        var _a;
        (_a = messagesRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({
            top: messagesRef.current.scrollHeight,
            behavior: "smooth",
        });
    }, [messagesRef]);
    var handleSubmit = (0, react_1.useCallback)(function (e) {
        var _a;
        e.preventDefault();
        if (!message.trim())
            return;
        socket.emit("message:send", { message: message.trim() });
        setShowEmoji(false);
        setMessage("");
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        scrollToBottom();
    }, [message, scrollToBottom, socket]);
    (0, react_1.useEffect)(function () {
        socket.emit("messages:getAll");
    }, [socket]);
    (0, react_1.useEffect)(function () {
        scrollToBottom();
    }, [scrollToBottom, showLead]);
    socket.on("messages:sendAll", function (dataMessages) {
        setMessages(dataMessages);
        scrollToBottom();
    });
    socket.on("message:get", function (dataMessage) {
        setMessages(__spreadArray(__spreadArray([], messages, true), [dataMessage], false));
        setTimeout(scrollToBottom, 0);
    });
    socket.on("lead:new", function () { return setShowLead(true); });
    var pickerStyle = {
        width: "100%",
        position: "absolute",
        bottom: "100%",
        zIndex: "99999",
    };
    return (react_1.default.createElement(Container_1.CHContainer, __assign({}, props),
        react_1.default.createElement(Header_1.CHHeader, null,
            react_1.default.createElement(Avatar_1.Avatar, { size: 94, src: theme.avatarDefault }),
            react_1.default.createElement(HeaderTitle_1.HeaderTitle, null, "Hi There!")),
        showLead ? (react_1.default.createElement(ChatLead_1.ChatLead, { setShowLead: setShowLead, scrollToBottom: scrollToBottom })) : (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(messages_1.CHMessagesContainer, null,
                react_1.default.createElement(messages_1.CHMessages, { ref: messagesRef }, messages.map(function (_a) {
                    var id = _a.id, message = _a.message, from = _a.from;
                    return (react_1.default.createElement(messages_1.CHMessage, { key: id, isSelf: +userId === from },
                        react_1.default.createElement(messages_1.CHMessageInfo, { isSelf: +userId === from }, message)));
                }))),
            react_1.default.createElement(footer_1.CHFooterContainer, null,
                showEmoji && (react_1.default.createElement(emoji_picker_react_1.default, { onEmojiClick: addEmoji, disableSearchBar: true, disableSkinTonePicker: true, disableAutoFocus: true, pickerStyle: pickerStyle, preload: true })),
                react_1.default.createElement(footer_1.CHInputContainer, { onSubmit: handleSubmit },
                    react_1.default.createElement(footer_1.CHInput, { placeholder: 'Type', value: message, onChange: function (e) {
                            setMessage(e.target.value);
                            scrollToBottom();
                        }, ref: inputRef }),
                    react_1.default.createElement(footer_1.CHEmoji, { type: 'button', onClick: handleShowEmoji },
                        react_1.default.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: '29.474', height: '29.474', viewBox: '0 0 29.474 29.474' },
                            react_1.default.createElement("g", { transform: 'translate(-4 -3)' },
                                react_1.default.createElement("path", { d: 'M23.895,16.263a2.211,2.211,0,1,0-2.211-2.211A2.208,2.208,0,0,0,23.895,16.263Zm-10.316,0a2.211,2.211,0,1,0-2.211-2.211A2.208,2.208,0,0,0,13.579,16.263Zm5.158,10.316a8.836,8.836,0,0,0,8.326-5.895H10.411A8.836,8.836,0,0,0,18.737,26.579ZM18.729,3A14.737,14.737,0,1,0,33.474,17.737,14.726,14.726,0,0,0,18.729,3Zm.007,27.263c-6.514,0-12.526-6.013-12.526-12.526S12.223,5.211,18.737,5.211s12.526,6.013,12.526,12.526S25.25,30.263,18.737,30.263Z', transform: 'translate(0 0)', fill: '#8793aa' })))),
                    react_1.default.createElement(footer_1.CHSend, { type: 'submit', disabled: !message.trim() },
                        react_1.default.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16' },
                            react_1.default.createElement("path", { d: 'M17.534,9.247,3.276,2.078A.844.844,0,0,0,2.082,3.114L4.073,8.451l9.081,1.513L4.073,11.478,2.082,16.814a.807.807,0,0,0,1.195.956L17.534,10.6A.757.757,0,0,0,17.534,9.247Z', transform: 'translate(-2.009 -1.994)', fill: '#fff' })))))))));
};
exports.ChatModal = ChatModal;
exports.default = exports.ChatModal;
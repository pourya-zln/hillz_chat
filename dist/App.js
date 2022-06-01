"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hillz_chat_1 = require("hillz_chat");
var App = function () {
    return (react_1.default.createElement("div", { className: 'App' },
        react_1.default.createElement(hillz_chat_1.Chat, { dealershipOrigin: 'localhost:3000' })));
};
exports.default = App;

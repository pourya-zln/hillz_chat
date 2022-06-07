"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socket = void 0;
var react_1 = require("react");
var socket_io_client_1 = require("socket.io-client");
exports.socket = (0, socket_io_client_1.io)("http://test111web.ca/client", { autoConnect: false });
var SocketContext = (0, react_1.createContext)(exports.socket);
exports.default = SocketContext;

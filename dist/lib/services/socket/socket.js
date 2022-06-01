"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSocketConnection = void 0;
var socket_io_client_1 = require("socket.io-client");
var createSocketConnection = function (options) {
    if (options === void 0) { options = {
        autoConnect: false,
        transports: ["websocket"],
    }; }
    return (0, socket_io_client_1.io)("http://localhost:5000/client", options);
};
exports.createSocketConnection = createSocketConnection;
exports.default = (0, exports.createSocketConnection)();

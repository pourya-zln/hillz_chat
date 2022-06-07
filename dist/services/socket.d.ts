/// <reference types="react" />
import { Socket } from "socket.io-client";
export declare const socket: Socket<import("@socket.io/component-emitter").DefaultEventsMap, import("@socket.io/component-emitter").DefaultEventsMap>;
declare const SocketContext: import("react").Context<Socket<import("@socket.io/component-emitter").DefaultEventsMap, import("@socket.io/component-emitter").DefaultEventsMap>>;
export default SocketContext;

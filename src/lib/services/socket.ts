import { createContext } from "react"
import { io, Socket } from "socket.io-client"

export const socket = io("https://test111web.ca/client", { autoConnect: false })

const SocketContext = createContext<Socket>(socket)

export default SocketContext

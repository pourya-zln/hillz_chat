import { io, ManagerOptions, SocketOptions } from "socket.io-client"

export const createSocketConnection = (
  options: Partial<ManagerOptions & SocketOptions> = {
    autoConnect: false,
    transports: ["websocket"],
  }
) => io("http://localhost:5000/client", options)

export default createSocketConnection()

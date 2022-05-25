import { io, ManagerOptions, SocketOptions } from "socket.io-client"

export const createSocketConnection = (
  uri: string,
  options: Partial<ManagerOptions & SocketOptions> = {
    autoConnect: false,
  }
) => io(uri, options)

export default createSocketConnection

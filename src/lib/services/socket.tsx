import React, { Dispatch, useEffect, useMemo, useState } from "react"
import { createContext } from "react"
import { io, Socket } from "socket.io-client"

interface ISocketContext {
  socket: Socket
  setSocket: Dispatch<React.SetStateAction<Socket>>
}

const socketIo = io("http://localhost:5000/client", {
  transports: ["websocket"],
  autoConnect: false,
})

export const SocketContext = createContext<ISocketContext>({
  socket: socketIo,
  setSocket: () => {},
})

const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState<Socket>(socketIo)

  const value = useMemo(() => ({ socket, setSocket }), [socket])

  // useEffect(() => {
  //   setSocket((prevSocket) => prevSocket.connect())
  //   console.log("Should be connected")
  // }, [])

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  )
}

export default SocketProvider

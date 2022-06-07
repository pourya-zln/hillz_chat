import React, { useState, MouseEvent, useContext, useCallback } from "react"
import { ChatButton } from "../ChatButton"
import { ChatProps } from "./types/chat.type"
import ThemeProvider from "../../Theme/ThemeProvider"
import { ChatModal } from "../ChatModal"
import { CHChat } from "./components/Chat"
import SocketContext from "../../services/socket"

export const Chat = ({ dealershipOrigin, onButtonClick, theme }: ChatProps) => {
  const [showChat, setShowChat] = useState(false)
  const socket = useContext(SocketContext)

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      setShowChat((prevShowChat) => !prevShowChat)

      socket.auth = {
        origin: dealershipOrigin,
        sessionId: sessionStorage.getItem("sessionId"),
      }

      socket.connect()

      onButtonClick && onButtonClick(e)
    },
    [dealershipOrigin, onButtonClick, socket]
  )

  const handleConnectionError = useCallback(
    (err: Error) => {
      console.log({ err })
      socket.removeAllListeners()
    },
    [socket]
  )

  const handleDisconnect = useCallback(() => {
    socket.removeAllListeners()
  }, [socket])

  const handleSession = useCallback(
    ({ sessionId, userId }: { sessionId: number; userId: number }) => {
      socket.auth = { ...socket.auth, sessionId }

      sessionStorage.setItem("sessionId", `${sessionId}`)
      sessionStorage.setItem("userId", `${userId}`)
    },
    [socket]
  )

  socket.on("session", handleSession)
  socket.on("connect_error", handleConnectionError)
  socket.on("disconnect", handleDisconnect)

  return (
    <ThemeProvider theme={theme}>
      <CHChat>
        {showChat && <ChatModal />}
        <ChatButton showTimes={showChat} onClick={handleClick} />
      </CHChat>
    </ThemeProvider>
  )
}

export default Chat

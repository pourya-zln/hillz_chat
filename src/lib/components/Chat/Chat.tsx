import React, { useState, MouseEvent, useContext, useEffect, memo } from "react"
import { ChatButton } from "../ChatButton"
import { ChatProps } from "./types/chat.type"
import ThemeProvider from "../../Theme/ThemeProvider"
import { ChatModal } from "../ChatModal"
import { CHChat } from "./components/Chat"
import { SocketContext } from "../../services/socket"

export const Chat = ({ dealershipOrigin, onButtonClick, theme }: ChatProps) => {
  const [showChat, setShowChat] = useState(false)
  const { socket, setSocket } = useContext(SocketContext)

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setShowChat((prevShowChat) => !prevShowChat)

    onButtonClick && onButtonClick(e)
  }

  const handleConnectionError = (err: Error) => {
    console.log({ err })
    socket.removeAllListeners()
  }

  const handleDisconnect = () => {
    socket.removeAllListeners()
  }

  const handleSession = ({
    sessionId,
    userId,
  }: {
    sessionId: number
    userId: number
  }) => {
    socket.auth = { ...socket.auth, sessionId }

    sessionStorage.setItem("sessionId", `${sessionId}`)
    sessionStorage.setItem("userId", `${userId}`)
  }

  socket.on("session", handleSession)
  socket.on("connect_error", handleConnectionError)
  socket.on("disconnect", handleDisconnect)

  useEffect(() => {
    socket.auth = {
      origin: dealershipOrigin,
      sessionId: sessionStorage.getItem("sessionId"),
    }

    setSocket(() => socket.connect())
  }, [dealershipOrigin, setSocket, socket])

  useEffect(() => {
    socket.emit("user:join")
  }, [socket])

  return (
    <ThemeProvider theme={theme}>
      <CHChat>
        {showChat && <ChatModal />}
        <ChatButton showTimes={showChat} onClick={handleClick} />
      </CHChat>
    </ThemeProvider>
  )
}

export default memo(Chat)

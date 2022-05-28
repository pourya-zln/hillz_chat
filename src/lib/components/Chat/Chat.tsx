import React, { useState, MouseEvent } from "react"
import socket from "../../services/socket/socket"
import { ChatButton } from "../ChatButton"
import { ChatProps } from "./types/chat.type"
import ThemeProvider from "../../Theme/ThemeProvider"
import { ChatModal } from "../ChatModal"
import { CHChat } from "./components/Chat"

export const Chat = ({ dealershipOrigin, onButtonClick, theme }: ChatProps) => {
  const [showChat, setShowChat] = useState(false)

  socket.on("session", ({ sessionId, userId }) => {
    socket.auth = { ...socket.auth, sessionId }

    sessionStorage.setItem("sessionId", sessionId)
    sessionStorage.setItem("userId", userId)
  })

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setShowChat((prevShowChat) => !prevShowChat)

    socket.auth = {
      origin: dealershipOrigin,
      sessionId: sessionStorage.getItem("sessionId"),
    }

    socket.connect()

    onButtonClick && onButtonClick(e)
  }

  socket.on("connect_error", (err) => {
    console.log({ err })
  })

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

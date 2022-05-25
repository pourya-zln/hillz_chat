import React, { useState } from "react"
import createSocketConnection from "../../services/socket/socket"
import { ChatButton } from "../ChatButton"
import { ChatProps } from "./types/chat.type"
import ThemeProvider from "../../Theme/ThemeProvider"
import { ChatModal } from "../ChatModal"
import { CHChat } from "./components/Chat"

export const Chat = ({
  connectionUri,
  connectionOptions,
  dealershipOrigin,
  ...props
}: ChatProps) => {
  const socket = createSocketConnection(connectionUri, connectionOptions)

  const [showChat, setShowChat] = useState(false)

  socket.on("session", ({ sessionId, userId }) => {
    socket.auth = { ...socket.auth, sessionId }

    sessionStorage.setItem("sessionId", sessionId)
    sessionStorage.setItem("userId", userId)
  })

  const handleClick = () => {
    setShowChat((prevShowChat) => !prevShowChat)

    socket.auth = {
      origin: dealershipOrigin,
      sessionId: sessionStorage.getItem("sessionId") || null,
    }

    socket.connect()

    console.log("SS AC MILAN", socket)
  }

  return (
    <ThemeProvider>
      <CHChat>
        {showChat && <ChatModal socket={socket} />}
        <ChatButton showTimes={showChat} onClick={handleClick} />
      </CHChat>
    </ThemeProvider>
  )
}

export default Chat

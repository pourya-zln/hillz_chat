import { useEffect, useRef, useState, useCallback } from "react"
import { Socket } from "socket.io-client"
import { IMessage } from "../../../dist/components/ChatModal/types/message.type"

const useChat = (
  userId: string | number,
  socket: Socket
): [IMessage[], (message: string) => void, () => void] => {
  const [messages, setMessages] = useState<IMessage[]>([])
  const socketRef = useRef<Socket | null>(null)

  useEffect(() => {
    socketRef.current = socket

    socketRef.current.on("message:get", (message: IMessage) => {
      setMessages(() => [...messages, message])
    })

    socketRef.current?.on("messages:sendAll", (dataMessages) => {
      setMessages(() => dataMessages)
    })
  }, [userId, socket, messages])

  const sendMessage = useCallback((message: string) => {
    socketRef?.current?.emit("message:send", { message: message.trim() })
  }, [])

  const receiveAllMessages = useCallback(() => {
    socketRef.current?.emit("messages:getAll")
  }, [])

  return [messages, sendMessage, receiveAllMessages]
}

export default useChat

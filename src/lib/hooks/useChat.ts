import { useEffect, useRef, useState, useCallback } from "react"
import { Socket } from "socket.io-client"
import moment from "moment"
import { v4 as uuid } from "uuid"
import { IMessage } from "lib/components/ChatModal/types/message.type"

const useChat = (
  userId: string | number,
  socket: Socket
): [
  IMessage[],
  (message: string, from: number, to: number) => void,
  () => void
] => {
  const [messages, setMessages] = useState<IMessage[]>([])
  const socketRef = useRef<Socket | null>(null)

  useEffect(() => {
    socketRef.current = socket

    socketRef.current.on("message:get", (message: IMessage) => {
      setMessages([...messages, message])
    })

    socketRef.current?.on("messages:sendAll", (dataMessages: IMessage[]) => {
      setMessages(dataMessages)
    })
  }, [userId, socket, messages])

  const sendMessage = useCallback(
    (message: string, from: number, to: number) => {
      socketRef?.current?.emit("message:send", { message: message.trim() })

      const createMessage = (): IMessage => ({
        id: uuid(),
        createdAt: moment()
          .utc(false)
          .format(),
        updatedAt: moment()
          .utc(false)
          .format(),
        from,
        message,
        fromType: "USER",
        messageType: "text",
        roomId: to,
        src: null,
      })

      setMessages((prev: IMessage[]) => {
        const newMessage = createMessage()
        return [...prev, newMessage]
      })
    },
    []
  )

  const receiveAllMessages = useCallback(() => {
    socketRef.current?.emit("messages:getAll")
  }, [])

  return [messages, sendMessage, receiveAllMessages]
}

export default useChat

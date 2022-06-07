import React, {
  FormEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
  useContext,
  useCallback,
} from "react"
import { ChatModalProps } from "./types/chat-modal.type"
import {
  CHSend,
  CHEmoji,
  CHInputContainer,
  CHInput,
  CHFooterContainer,
} from "./components/footer"
import { CHContainer } from "./components/Container"
import { ReactComponent as EmojiIcon } from "../../assets/emoji.svg"
import { ReactComponent as SendIcon } from "../../assets/send.svg"
import Picker, { IEmojiData } from "emoji-picker-react"
import { CHHeader } from "./components/header/Header"
import {
  CHMessage,
  CHMessageInfo,
  CHMessages,
  CHMessagesContainer,
} from "./components/messages"
import { Avatar } from "./components/Avatar"
import { useTheme } from "styled-components"
import { HeaderTitle } from "./components/header/HeaderTitle"
import { IMessage } from "./types/message.type"
import { ChatLead } from "../ChatLead"
import SocketContext from "lib/services/socket"

export const ChatModal = (props: ChatModalProps) => {
  const socket = useContext(SocketContext)
  const [message, setMessage] = useState("")
  const [showEmoji, setShowEmoji] = useState(false)
  const [messages, setMessages] = useState<IMessage[]>([])
  const [showLead, setShowLead] = useState(true)

  const inputRef = useRef<HTMLInputElement | null>(null)
  const messagesRef = useRef<HTMLUListElement | null>(null)
  const theme = useTheme()

  const userId = sessionStorage.getItem("userId") as string

  const addEmoji = useCallback(
    (_e: MouseEvent<Element>, data: IEmojiData) => {
      const sym = data.unified.split("-")
      const codesArray: string[] = []
      sym.forEach((val) => codesArray.push(`0x${val}`))
      const emoji = String.fromCodePoint(...(codesArray as any))
      setMessage(message + emoji)
      inputRef.current?.focus()
    },
    [message]
  )

  const handleShowEmoji = useCallback(() => {
    setShowEmoji((showEmojiPrev) => !showEmojiPrev)
    inputRef.current?.focus()
  }, [])

  const scrollToBottom = useCallback(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    })
  }, [messagesRef])

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (!message.trim()) return

      socket.emit("message:send", { message: message.trim() })

      setShowEmoji(false)
      setMessage("")
      inputRef.current?.focus()
      scrollToBottom()
    },
    [message, scrollToBottom, socket]
  )

  useEffect(() => {
    socket.emit("messages:getAll")
  }, [socket])

  useEffect(() => {
    scrollToBottom()
  }, [scrollToBottom, showLead])

  socket.on("messages:sendAll", (dataMessages) => {
    setMessages(dataMessages)
    scrollToBottom()
  })

  socket.on("message:get", (dataMessage) => {
    setMessages([...messages, dataMessage])
    setTimeout(scrollToBottom, 0)
  })

  socket.on("lead:new", () => setShowLead(true))

  const pickerStyle = {
    width: "100%",
    position: "absolute",
    bottom: "100%",
    zIndex: "99999",
  }

  return (
    <CHContainer {...props}>
      <CHHeader>
        <Avatar size={94} src={theme.avatarDefault} />
        <HeaderTitle>Hi There!</HeaderTitle>
      </CHHeader>
      {showLead ? (
        <ChatLead setShowLead={setShowLead} scrollToBottom={scrollToBottom} />
      ) : (
        <>
          <CHMessagesContainer>
            <CHMessages ref={messagesRef}>
              {messages.map(({ id, message, from }) => (
                <CHMessage key={id} isSelf={+userId === from}>
                  <CHMessageInfo isSelf={+userId === from}>
                    {message}
                  </CHMessageInfo>
                </CHMessage>
              ))}
            </CHMessages>
          </CHMessagesContainer>
          <CHFooterContainer>
            {showEmoji && (
              <Picker
                onEmojiClick={addEmoji}
                disableSearchBar
                disableSkinTonePicker
                disableAutoFocus
                pickerStyle={pickerStyle}
                preload
              />
            )}
            <CHInputContainer onSubmit={handleSubmit}>
              <CHInput
                placeholder='Type'
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value)
                  scrollToBottom()
                }}
                ref={inputRef}
              />
              <CHEmoji type='button' onClick={handleShowEmoji}>
                <EmojiIcon />
              </CHEmoji>
              <CHSend type='submit' disabled={!message.trim()}>
                <SendIcon />
              </CHSend>
            </CHInputContainer>
          </CHFooterContainer>
        </>
      )}
    </CHContainer>
  )
}

export default ChatModal

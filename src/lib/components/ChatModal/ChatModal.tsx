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
import { ChatLead } from "../ChatLead"
import { SocketContext } from "../../services/socket"
import Picker, { IEmojiData } from "emoji-picker-react"
import useChat from "../../hooks/useChat"

export const ChatModal = (props: ChatModalProps) => {
  const userId = sessionStorage.getItem("userId") as string

  // Hooks
  const { socket } = useContext(SocketContext)
  const [message, setMessage] = useState("")
  const [showEmoji, setShowEmoji] = useState(false)
  const [showLead, setShowLead] = useState(false)
  const [messages, sendMessage, getAllMessages] = useChat(userId, socket)

  const inputRef = useRef<HTMLInputElement | null>(null)
  const messagesRef = useRef<HTMLUListElement | null>(null)
  const theme = useTheme()

  // Handlers
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
      const roomId = sessionStorage.getItem("roomId") as string
      const from = sessionStorage.getItem("userId") as string

      if (!message.trim()) return

      sendMessage(message, +roomId, +from)

      setShowEmoji(false)
      setMessage("")
      inputRef.current?.focus()
      scrollToBottom()
    },
    [message, scrollToBottom, sendMessage]
  )

  const handleLeadRequest = useCallback(() => setShowLead(true), [])

  useEffect(() => {
    getAllMessages()
  }, [getAllMessages])

  useEffect(() => {
    scrollToBottom()
  }, [scrollToBottom, messages])

  socket.on("lead:request", handleLeadRequest)

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
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='29.474'
                  height='29.474'
                  viewBox='0 0 29.474 29.474'
                >
                  <g transform='translate(-4 -3)'>
                    <path
                      d='M23.895,16.263a2.211,2.211,0,1,0-2.211-2.211A2.208,2.208,0,0,0,23.895,16.263Zm-10.316,0a2.211,2.211,0,1,0-2.211-2.211A2.208,2.208,0,0,0,13.579,16.263Zm5.158,10.316a8.836,8.836,0,0,0,8.326-5.895H10.411A8.836,8.836,0,0,0,18.737,26.579ZM18.729,3A14.737,14.737,0,1,0,33.474,17.737,14.726,14.726,0,0,0,18.729,3Zm.007,27.263c-6.514,0-12.526-6.013-12.526-12.526S12.223,5.211,18.737,5.211s12.526,6.013,12.526,12.526S25.25,30.263,18.737,30.263Z'
                      transform='translate(0 0)'
                      fill='#8793aa'
                    />
                  </g>
                </svg>
              </CHEmoji>
              <CHSend type='submit' disabled={!message.trim()}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                >
                  <path
                    d='M17.534,9.247,3.276,2.078A.844.844,0,0,0,2.082,3.114L4.073,8.451l9.081,1.513L4.073,11.478,2.082,16.814a.807.807,0,0,0,1.195.956L17.534,10.6A.757.757,0,0,0,17.534,9.247Z'
                    transform='translate(-2.009 -1.994)'
                    fill='#fff'
                  />
                </svg>
              </CHSend>
            </CHInputContainer>
          </CHFooterContainer>
        </>
      )}
    </CHContainer>
  )
}

export default ChatModal

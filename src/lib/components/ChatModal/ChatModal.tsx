import React, {
  FormEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
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

export const ChatModal = ({ socket, ...props }: ChatModalProps) => {
  const [message, setMessage] = useState("")
  const [showEmoji, setShowEmoji] = useState(false)
  const [messages, setMessages] = useState<IMessage[]>([])
  const inputRef = useRef<HTMLInputElement | null>(null)
  const theme = useTheme()
  const userId = sessionStorage.getItem("userId") as string

  const addEmoji = (_e: MouseEvent<Element>, data: IEmojiData) => {
    const sym = data.unified.split("-")
    const codesArray: string[] = []
    sym.forEach((val) => codesArray.push(`0x${val}`))
    const emoji = String.fromCodePoint(...(codesArray as any))
    setMessage(message + emoji)
    inputRef.current?.focus()
  }

  const handleShowEmoji = () => {
    setShowEmoji((showEmojiPrev) => !showEmojiPrev)
    inputRef.current?.focus()
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    socket.emit("fake")
    console.log(socket)

    if (message.trim()) {
      socket.emit("message:send", { message })
    }
  }

  useEffect(() => {
    socket.emit("messages:getAll")
  }, [socket])

  socket.on("messages:sendAll", (dataMessages) => {
    setMessage(dataMessages)
  })

  socket.on("message:get", (dataMessage) => {
    setMessages([...messages, dataMessage])
  })

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
      <CHMessagesContainer>
        <CHMessages>
          {messages.map(({ id, message, from }) => (
            <CHMessage key={id} isSelf={+userId === from}>
              <CHMessageInfo isSelf={+userId === from}>{message}</CHMessageInfo>
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
          />
        )}
        <CHInputContainer onSubmit={handleSubmit}>
          <CHInput
            placeholder='Type'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
    </CHContainer>
  )
}

export default ChatModal

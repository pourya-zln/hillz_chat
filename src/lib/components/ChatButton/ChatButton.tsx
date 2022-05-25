import React from "react"
import { ChatButtonProps } from "./types/chat-button.type"
import { CHButton } from "./components/Button"
import { ReactComponent as DefaultIcon } from "../../assets/button-logo.svg"
import { ReactComponent as TimesIcon } from "../../assets/times.svg"

export const ChatButton = ({ icon, showTimes, ...props }: ChatButtonProps) => {
  return (
    <CHButton type='button' showTimes={showTimes} {...props}>
      {showTimes ? <TimesIcon /> : icon ? icon : <DefaultIcon />}
    </CHButton>
  )
}

export default ChatButton

import React from "react"
import { CHForm } from "./components"
import { CHLeadStatusButton, CHLeadSubmitButton } from "./components/Button"
import { CHInput } from "./components/Input"
import { ReactComponent as SendIcon } from "../../assets/leadButtonIcon.svg"
import { CHNavigationContainer } from "./components/NavigationContainer"
import { ChatLeadProps } from "./types/ChatLead.type"

export const ChatLead = ({ setShowLead }: ChatLeadProps) => {
  return (
    <CHForm>
      <CHNavigationContainer>
        <CHLeadStatusButton
          outlined
          type='button'
          onClick={() => {
            setShowLead(false)
          }}
        >
          Chat
        </CHLeadStatusButton>
        <CHLeadStatusButton type='button'>Lead</CHLeadStatusButton>
      </CHNavigationContainer>
      <CHInput placeholder='First name' />
      <CHInput placeholder='Last name' />
      <CHInput placeholder='Email' />
      <CHInput placeholder='Phone' />
      <CHLeadSubmitButton type='submit'>
        <span>send</span>
        <SendIcon />
      </CHLeadSubmitButton>
    </CHForm>
  )
}

export default ChatLead

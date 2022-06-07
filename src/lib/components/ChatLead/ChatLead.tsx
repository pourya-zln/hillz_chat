import React from "react"
import { CHForm } from "./components"
import { CHLeadStatusButton, CHLeadSubmitButton } from "./components/Button"
import { CHInput } from "./components/Input"
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
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='15.943'
          height='15.899'
          viewBox='0 0 15.943 15.899'
        >
          <path
            id='send'
            d='M17.534,9.247,3.276,2.078A.844.844,0,0,0,2.082,3.114L4.073,8.451l9.081,1.513L4.073,11.478,2.082,16.814a.807.807,0,0,0,1.195.956L17.534,10.6A.757.757,0,0,0,17.534,9.247Z'
            transform='translate(-2.009 -1.994)'
            fill='#fff'
          />
        </svg>
      </CHLeadSubmitButton>
    </CHForm>
  )
}

export default ChatLead

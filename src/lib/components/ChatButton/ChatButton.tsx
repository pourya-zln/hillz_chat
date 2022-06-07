import React from "react"
import { ChatButtonProps } from "./types/chat-button.type"
import { CHButton } from "./components/Button"

export const ChatButton = ({ icon, showTimes, ...props }: ChatButtonProps) => {
  return (
    <CHButton type='button' showTimes={showTimes} {...props}>
      {showTimes ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='71.002'
          height='71.002'
          viewBox='0 0 71.002 71.002'
        >
          <path
            d='M39.5,4A35.5,35.5,0,1,0,75,39.5,35.5,35.5,0,0,0,39.5,4Zm16.45,45.677a4.437,4.437,0,1,1-6.275,6.275L39.5,45.776,29.326,55.951a4.437,4.437,0,0,1-6.275-6.275L33.226,39.5,23.051,29.326a4.437,4.437,0,0,1,6.275-6.275L39.5,33.226,49.677,23.051a4.437,4.437,0,0,1,6.275,6.275L45.776,39.5Z'
            transform='translate(-4 -4)'
            fill='#8793aa'
          />
        </svg>
      ) : icon ? (
        icon
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='71.002'
          height='71.002'
          viewBox='0 0 71.002 71.002'
        >
          <g
            id='Bubble_double_round_speech_chat_icon'
            transform='translate(-3.416 7.004)'
          >
            <path
              id='_216170_delete_icon'
              data-name='216170_delete_icon'
              d='M39.5,4A35.5,35.5,0,1,0,75,39.5,35.5,35.5,0,0,0,39.5,4Z'
              transform='translate(-0.584 -11.004)'
              fill='rgba(18,75,150,0)'
            />
            <path
              id='Path_6'
              data-name='Path 6'
              d='M38.916,7.69a20.228,20.228,0,0,0-.258,40.454V56.75L52.481,42.928A20.229,20.229,0,0,0,38.916,7.69Z'
              transform='translate(0)'
              fill='#fff'
            />
          </g>
        </svg>
      )}
    </CHButton>
  )
}

export default ChatButton

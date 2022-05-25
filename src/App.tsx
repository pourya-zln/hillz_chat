import React from "react"
import { Chat } from "./lib"

const App = () => {
  return (
    <div className='App'>
      <Chat
        connectionUri='http://localhost:5000/client'
        dealershipOrigin='localhost:3000'
      />
    </div>
  )
}

export default App

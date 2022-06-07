import React from "react"
import SocketProvider from "lib/services/socket"
import { Chat } from "lib"

const App = () => {
  return (
    <div className='App'>
      <SocketProvider>
        <Chat dealershipOrigin='localhost:3000' />
      </SocketProvider>
    </div>
  )
}

export default App

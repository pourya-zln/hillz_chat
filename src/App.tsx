import React from "react"
import { Chat } from "./lib"
import SocketContext, { socket } from "lib/services/socket"

const App = () => {
  return (
    <div className='App'>
      <SocketContext.Provider value={socket}>
        <Chat dealershipOrigin='localhost:3000' />
      </SocketContext.Provider>
    </div>
  )
}

export default App

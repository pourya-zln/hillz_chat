import React from "react"
import { Chat } from "hillz_chat/dist/lib"
import SocketContext, { socket } from "hillz_chat/dist/lib/services/socket"
// import SocketContext, { socket } from "lib/services/socket"

const App = () => {
  console.log("Chat")
  return (
    <div className='App'>
      <SocketContext.Provider value={socket}>
        <Chat dealershipOrigin='localhost:3000' />
      </SocketContext.Provider>
    </div>
  )
}

export default App

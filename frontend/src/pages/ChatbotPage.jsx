"use client"

import { useState } from "react"
import "./ChatbotPage.css"

function ChatbotPage() {
  const [input, setInput] = useState("")
  const [conversation, setConversation] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the input to your chatbot API
    // For this example, we'll just echo the input
    setConversation((prev) => `${prev}You: ${input}\nBot: I received your message: "${input}"\n\n`)
    setInput("")
  }

  return (
    <div className="chatbot-page">
      <h1>Chatbot</h1>
      <div className="chat-container">
        <textarea className="chat-display" value={conversation} readOnly />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message here..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default ChatbotPage


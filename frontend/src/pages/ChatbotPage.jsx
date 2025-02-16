import { useState, useRef, useEffect } from "react"
import "./ChatbotPage.css"

function ChatbotPage() {
  const [input, setInput] = useState("")
  const [conversation, setConversation] = useState([])
  const chatEndRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const newMessage = { sender: "You", text: input }
    setConversation((prev) => [...prev, newMessage])

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      })
      const data = await response.json()
      const botMessage = { sender: "Bot", text: data.response }

      setConversation((prev) => [...prev, botMessage])
    } catch (error) {
      console.error("Error fetching response:", error)
      setConversation((prev) => [...prev, { sender: "Bot", text: "Error communicating with server." }])
    }

    setInput("")
  }

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [conversation])

  return (
    <div className="chatbot-page">
      <h1>Chatbot</h1>
      <div className="chat-container">
        <div className="chat-display">
          {conversation.map((msg, index) => (
            <p key={index} className={msg.sender === "You" ? "user-message" : "bot-message"}>
              <strong>{msg.sender}:</strong> {msg.text}
            </p>
          ))}
          <div ref={chatEndRef} />
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="chat-input" className="sr-only">Type your message</label>
          <input
            id="chat-input"
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

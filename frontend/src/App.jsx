import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import ProjectsPage from "./pages/ProjectsPage"
import ChatbotPage from "./pages/ChatbotPage"
import PDFsPage from "./pages/PDFsPage"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/pdfs" element={<PDFsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App


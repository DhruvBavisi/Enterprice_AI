import { Link } from "react-router-dom"
import "./HomePage.css"

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to Our Creative Platform</h1>
      <div className="card-container">
        <Link to="/projects" className="card">
          <h2>Projects</h2>
          <p>Explore our innovative projects</p>
        </Link>
        <Link to="/chatbot" className="card">
          <h2>Chatbot</h2>
          <p>Interact with our AI assistant</p>
        </Link>
        <Link to="/pdfs" className="card">
          <h2>PDFs</h2>
          <p>Access and manage your documents</p>
        </Link>
      </div>
    </div>
  )
}

export default HomePage


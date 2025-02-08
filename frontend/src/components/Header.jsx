import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/chatbot">Chatbot</Link>
          </li>
          <li>
            <Link to="/pdfs">PDFs</Link>
          </li>
        </ul>
      </nav>
      <div className="user-profile">
        <img src="/placeholder.svg?height=40&width=40" alt="User Profile" />
      </div>
    </header>
  )
}

export default Header


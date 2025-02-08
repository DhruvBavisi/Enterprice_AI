import "./ProjectsPage.css"

function ProjectsPage() {
  const projects = [
    { id: 1, name: "Website Redesign", active: true },
    { id: 2, name: "Mobile App Development", active: false },
    { id: 3, name: "Database Migration", active: true },
    { id: 4, name: "AI Integration", active: false },
    { id: 5, name: "Security Audit", active: true },
  ]

  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.id} className={project.active ? "active" : ""}>
            <span className="project-name">{project.name}</span>
            <span className="project-status">{project.active ? "Active" : "Inactive"}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectsPage


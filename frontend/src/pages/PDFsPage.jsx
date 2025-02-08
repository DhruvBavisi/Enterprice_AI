import "./PDFsPage.css"

function PDFsPage() {
  const pdfs = [
    { id: 1, name: "Employee Handbook", category: "HR" },
    { id: 2, name: "Code of Conduct", category: "Legal" },
    { id: 3, name: "Privacy Policy", category: "Legal" },
    { id: 4, name: "IT Security Guidelines", category: "IT" },
    { id: 5, name: "Expense Report Template", category: "Finance" },
  ]

  return (
    <div className="pdfs-page">
      <h1>Company PDFs</h1>
      <table className="pdf-table">
        <thead>
          <tr>
            <th>Document Name</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pdfs.map((pdf) => (
            <tr key={pdf.id}>
              <td>{pdf.name}</td>
              <td>{pdf.category}</td>
              <td>
                <button className="view-btn">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PDFsPage


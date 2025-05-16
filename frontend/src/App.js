import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [documents, setDocuments] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("id");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL || "http://localhost:4000"}/documents`, {
        params: { search, sort, order, page }
      })
      .then((res) => setDocuments(res.data));
  }, [search, sort, order, page]);

  return (
    <div style={{ padding: 24 }}>
      <h1>Documents</h1>
      <input
        placeholder="Search by title"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <table border="1" cellPadding="8" style={{ marginTop: 16 }}>
        <thead>
          <tr>
            <th onClick={() => setSort("id")}>ID</th>
            <th onClick={() => setSort("title")}>Title</th>
            <th>Total</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {documents.map(doc => (
            <tr key={doc.id}>
              <td>{doc.id}</td>
              <td>{doc.title}</td>
              <td>{doc.total}</td>
              <td>
                <a href={`/document/${doc.id}`}>View</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
      <span> Page {page} </span>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}

export default App;

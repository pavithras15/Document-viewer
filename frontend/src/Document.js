import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function Document() {
  const { id } = useParams();
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL || "http://localhost:4000"}/documents/${id}`)
      .then((res) => setDoc(res.data));
  }, [id]);

  if (!doc) return <div>Loading...</div>;

  return (
    <div style={{ padding: 24 }}>
      <h1>Document #{doc.id}: {doc.title}</h1>
      <p><b>Total:</b> {doc.total}</p>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {doc.rows.map(row => (
            <tr key={row.id}>
              <td>{row.description}</td>
              <td>{row.quantity}</td>
              <td>{row.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <Link to="/">Back to list</Link>
    </div>
  );
}
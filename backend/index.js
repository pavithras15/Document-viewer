const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Get paginated, searchable, sortable list of documents
app.get('/documents', async (req, res) => {
  const { page = 1, limit = 10, search = '', sort = 'id', order = 'asc' } = req.query;
  const offset = (page - 1) * limit;
  try {
    const docs = await pool.query(
      `SELECT d.id, d.title, 
        COALESCE(SUM(r.quantity * r.price), 0) AS total
       FROM documents d
       LEFT JOIN rows r ON d.id = r.document_id
       WHERE d.title ILIKE $1
       GROUP BY d.id
       ORDER BY ${sort} ${order === 'desc' ? 'DESC' : 'ASC'}
       LIMIT $2 OFFSET $3`,
      [`%${search}%`, limit, offset]
    );
    res.json(docs.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get document by id with rows
app.get('/documents/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await pool.query(
      `SELECT d.id, d.title, 
        COALESCE(SUM(r.quantity * r.price), 0) AS total
       FROM documents d
       LEFT JOIN rows r ON d.id = r.document_id
       WHERE d.id = $1
       GROUP BY d.id`,
      [id]
    );
    const rows = await pool.query(
      `SELECT id, description, quantity, price
       FROM rows WHERE document_id = $1`,
      [id]
    );
    res.json({ ...doc.rows[0], rows: rows.rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(4000, () => {
  console.log('Backend running on port 4000');
});
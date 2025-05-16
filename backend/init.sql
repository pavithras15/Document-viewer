CREATE TABLE documents (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL
);

CREATE TABLE rows (
  id SERIAL PRIMARY KEY,
  document_id INTEGER REFERENCES documents(id),
  description TEXT,
  quantity INTEGER,
  price NUMERIC
);

INSERT INTO documents (title) VALUES ('Invoice 1'), ('Invoice 2');

INSERT INTO rows (document_id, description, quantity, price) VALUES
  (1, 'Item A', 2, 10.00),
  (1, 'Item B', 1, 20.00),
  (2, 'Item C', 5, 5.00);
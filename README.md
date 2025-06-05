# Document Viewer App

A full-stack web application for viewing and searching documents (such as invoices) with a React frontend, Node.js/Express backend, and PostgreSQL database. Docker Compose is used for easy setup.

## Features

- Browse and search documents
- View document details and rows
- RESTful API backend
- Containerized with Docker

## Folder Structure

```
docker-compose.yaml
backend/
  Dockerfile
  index.js
  init.sql
  package.json
frontend/
  Dockerfile
  package.json
  public/
  src/
```

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)

### Running the App

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd doc_view
   ```

2. **Start all services:**
   ```sh
   docker-compose up --build
   ```

3. **Access the app:**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:4000](http://localhost:4000)

## API Endpoints

- `GET /documents` — List documents
- `GET /documents/:id` — Get document details

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

```
MIT License

Copyright (c) [Year] [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

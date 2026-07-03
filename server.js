import Database from "better-sqlite3";
import express from "express";
import cors from "cors";

const db = new Database("preguntas.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS preguntas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    pregunta TEXT NOT NULL,
    respuesta TEXT DEFAULT '',
    creado TEXT DEFAULT (datetime('now', 'localtime'))
  )
`);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/preguntas", (_req, res) => {
  const rows = db.prepare("SELECT * FROM preguntas ORDER BY id DESC").all();
  res.json(rows);
});

app.post("/api/preguntas", (req, res) => {
  const { pregunta } = req.body;
  if (!pregunta || !pregunta.trim()) {
    return res.status(400).json({ error: "La pregunta no puede estar vacía" });
  }
  const result = db.prepare("INSERT INTO preguntas (pregunta) VALUES (?)").run(pregunta.trim());
  const row = db.prepare("SELECT * FROM preguntas WHERE id = ?").get(result.lastInsertRowid);
  res.status(201).json(row);
});

app.put("/api/preguntas/:id", (req, res) => {
  const { id } = req.params;
  const { respuesta } = req.body;
  db.prepare("UPDATE preguntas SET respuesta = ? WHERE id = ?").run(respuesta, id);
  const row = db.prepare("SELECT * FROM preguntas WHERE id = ?").get(id);
  if (!row) {
    return res.status(404).json({ error: "Pregunta no encontrada" });
  }
  res.json(row);
});

app.delete("/api/preguntas/:id", (req, res) => {
  const { id } = req.params;
  const result = db.prepare("DELETE FROM preguntas WHERE id = ?").run(id);
  if (result.changes === 0) {
    return res.status(404).json({ error: "Pregunta no encontrada" });
  }
  res.json({ ok: true });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor API en http://localhost:${PORT}`);
});

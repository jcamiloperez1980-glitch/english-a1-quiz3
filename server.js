const express = require("express");
const path = require("path");
const Database = require("better-sqlite3");
const questions = require("./questions");

const app = express();
const PORT = process.env.PORT || 3000;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "changeme";

const DB_PATH = process.env.DB_PATH || path.join(__dirname, "data", "attempts.db");
require("fs").mkdirSync(path.dirname(DB_PATH), { recursive: true });
const db = new Database(DB_PATH);
db.exec(`
  CREATE TABLE IF NOT EXISTS attempts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    student_name TEXT NOT NULL,
    student_id TEXT NOT NULL,
    score INTEGER NOT NULL,
    total INTEGER NOT NULL,
    answers_json TEXT NOT NULL,
    duration_seconds INTEGER,
    created_at TEXT DEFAULT (datetime('now'))
  );
`);

app.use(express.json({ limit: "200kb" }));
app.use(express.static(path.join(__dirname, "public")));

// Public quiz payload (no correct answers leaked)
app.get("/api/questions", (_req, res) => {
  res.json(questions.map(q => ({ id: q.id, skill: q.skill, text: q.text, options: q.options })));
});

app.post("/api/submit", (req, res) => {
  const { studentName, studentId, answers, durationSeconds } = req.body || {};
  if (!studentName || !studentId || !Array.isArray(answers)) {
    return res.status(400).json({ error: "Missing studentName, studentId, or answers" });
  }
  const graded = questions.map((q, i) => {
    const chosen = Number.isInteger(answers[i]) ? answers[i] : null;
    const correct = chosen === q.correct;
    return {
      id: q.id,
      skill: q.skill,
      chosen,
      correctIndex: q.correct,
      correctText: q.options[q.correct],
      chosenText: chosen != null ? q.options[chosen] : null,
      isCorrect: correct,
      explanation: q.explanation
    };
  });
  const score = graded.filter(g => g.isCorrect).length;
  const total = questions.length;

  db.prepare(
    `INSERT INTO attempts (student_name, student_id, score, total, answers_json, duration_seconds)
     VALUES (?, ?, ?, ?, ?, ?)`
  ).run(
    String(studentName).slice(0, 120),
    String(studentId).slice(0, 60),
    score,
    total,
    JSON.stringify(answers),
    Number.isFinite(durationSeconds) ? Math.round(durationSeconds) : null
  );

  res.json({ score, total, graded });
});

// Basic-auth admin
function requireAdmin(req, res, next) {
  const header = req.headers.authorization || "";
  const [scheme, encoded] = header.split(" ");
  if (scheme === "Basic" && encoded) {
    const [, pass] = Buffer.from(encoded, "base64").toString().split(":");
    if (pass === ADMIN_PASSWORD) return next();
  }
  res.set("WWW-Authenticate", 'Basic realm="admin"').status(401).send("Authentication required");
}

app.get("/admin", requireAdmin, (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin.html"));
});

app.get("/api/admin/attempts", requireAdmin, (_req, res) => {
  const rows = db.prepare(
    `SELECT id, student_name, student_id, score, total, duration_seconds, created_at, answers_json
     FROM attempts ORDER BY created_at DESC`
  ).all();
  res.json(rows.map(r => ({ ...r, answers: JSON.parse(r.answers_json), answers_json: undefined })));
});

app.get("/api/admin/stats", requireAdmin, (_req, res) => {
  const rows = db.prepare(`SELECT score, total, answers_json FROM attempts`).all();
  const perItem = questions.map(q => ({ id: q.id, skill: q.skill, correct: 0, attempts: 0 }));
  for (const r of rows) {
    const ans = JSON.parse(r.answers_json);
    questions.forEach((q, i) => {
      if (Number.isInteger(ans[i])) {
        perItem[i].attempts += 1;
        if (ans[i] === q.correct) perItem[i].correct += 1;
      }
    });
  }
  const avg = rows.length ? rows.reduce((s, r) => s + r.score, 0) / rows.length : 0;
  res.json({ totalAttempts: rows.length, averageScore: Number(avg.toFixed(2)), perItem });
});

app.listen(PORT, () => console.log(`Quiz app listening on port ${PORT}`));

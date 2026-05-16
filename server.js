const express = require("express");
const path = require("path");
const Database = require("better-sqlite3");
const { getBank, listQuizzes } = require("./questions");

const app = express();
const PORT = process.env.PORT || 3000;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "changeme";

const DB_PATH = process.env.DB_PATH || path.join(__dirname, "data", "attempts.db");
require("fs").mkdirSync(path.dirname(DB_PATH), { recursive: true });
const db = new Database(DB_PATH);
db.exec(`
  CREATE TABLE IF NOT EXISTS attempts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    level TEXT NOT NULL DEFAULT 'A1',
    student_name TEXT NOT NULL,
    student_id TEXT NOT NULL,
    score INTEGER NOT NULL,
    total INTEGER NOT NULL,
    answers_json TEXT NOT NULL,
    duration_seconds INTEGER,
    created_at TEXT DEFAULT (datetime('now'))
  );
`);
// Migration: add `level` column if upgrading from a previous DB.
try {
  const cols = db.prepare("PRAGMA table_info(attempts)").all().map(c => c.name);
  if (!cols.includes("level")) {
    db.exec("ALTER TABLE attempts ADD COLUMN level TEXT NOT NULL DEFAULT 'A1'");
  }
} catch (_) {}

app.use(express.json({ limit: "200kb" }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/quizzes", (_req, res) => res.json(listQuizzes()));

// Public quiz payload — no correct answers leaked
app.get("/api/questions", (req, res) => {
  const bank = getBank(req.query.level);
  if (!bank) return res.status(400).json({ error: "Invalid or missing level." });
  res.json(bank.map(q => ({
    id: q.id, skill: q.skill, text: q.text, options: q.options, multi: q.multi
  })));
});

function setsEqual(a, b) {
  if (a.length !== b.length) return false;
  const sa = new Set(a);
  for (const x of b) if (!sa.has(x)) return false;
  return true;
}

app.post("/api/submit", (req, res) => {
  const { level, studentName, studentId, answers, durationSeconds } = req.body || {};
  const bank = getBank(level);
  if (!bank) return res.status(400).json({ error: "Invalid or missing level. Use A1 or A2." });
  if (!studentName || !studentId || !Array.isArray(answers)) {
    return res.status(400).json({ error: "Missing studentName, studentId, or answers" });
  }
  const graded = bank.map((q, i) => {
    // Client sends either a single index (radio) or an array (checkboxes).
    const raw = answers[i];
    const chosenArr = Array.isArray(raw)
      ? raw.filter(Number.isInteger)
      : Number.isInteger(raw) ? [raw] : [];
    const isCorrect = setsEqual(chosenArr, q.correct);
    return {
      id: q.id,
      skill: q.skill,
      multi: q.multi,
      chosen: chosenArr,
      correctIndices: q.correct,
      correctTexts: q.correct.map(ix => q.options[ix]),
      chosenTexts: chosenArr.map(ix => q.options[ix]),
      isCorrect,
      explanation: q.explanation
    };
  });
  const score = graded.filter(g => g.isCorrect).length;
  const total = bank.length;

  db.prepare(
    `INSERT INTO attempts (level, student_name, student_id, score, total, answers_json, duration_seconds)
     VALUES (?, ?, ?, ?, ?, ?, ?)`
  ).run(
    String(level).toUpperCase(),
    String(studentName).slice(0, 120),
    String(studentId).slice(0, 60),
    score,
    total,
    JSON.stringify(answers),
    Number.isFinite(durationSeconds) ? Math.round(durationSeconds) : null
  );

  res.json({ score, total, graded });
});

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

app.get("/api/admin/attempts", requireAdmin, (req, res) => {
  const level = req.query.level ? String(req.query.level).toUpperCase() : null;
  const rows = (level
    ? db.prepare(
        `SELECT id, level, student_name, student_id, score, total, duration_seconds, created_at, answers_json
         FROM attempts WHERE level = ? ORDER BY created_at DESC`
      ).all(level)
    : db.prepare(
        `SELECT id, level, student_name, student_id, score, total, duration_seconds, created_at, answers_json
         FROM attempts ORDER BY created_at DESC`
      ).all()
  );
  res.json(rows.map(r => ({ ...r, answers: JSON.parse(r.answers_json), answers_json: undefined })));
});

app.get("/api/admin/stats", requireAdmin, (req, res) => {
  const level = req.query.level ? String(req.query.level).toUpperCase() : "A1";
  const bank = getBank(level);
  if (!bank) return res.status(400).json({ error: "Invalid level" });
  const rows = db.prepare(`SELECT score, total, answers_json FROM attempts WHERE level = ?`).all(level);
  const perItem = bank.map(q => ({ id: q.id, skill: q.skill, correct: 0, attempts: 0 }));
  for (const r of rows) {
    const ans = JSON.parse(r.answers_json);
    bank.forEach((q, i) => {
      const raw = ans[i];
      const chosenArr = Array.isArray(raw)
        ? raw.filter(Number.isInteger)
        : Number.isInteger(raw) ? [raw] : null;
      if (chosenArr === null || chosenArr.length === 0) return;
      perItem[i].attempts += 1;
      if (setsEqual(chosenArr, q.correct)) perItem[i].correct += 1;
    });
  }
  const avg = rows.length ? rows.reduce((s, r) => s + r.score, 0) / rows.length : 0;
  res.json({ level, totalAttempts: rows.length, averageScore: Number(avg.toFixed(2)), perItem });
});

app.listen(PORT, () => console.log(`Quiz app listening on port ${PORT}`));

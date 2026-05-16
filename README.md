# English A1 — Unit 3 Practice Quiz

A small web app where students practice the Unit 3 quiz (20 multiple-choice items). Students pick their level — **A1** or **A2** — and get a different question bank tailored to that level. After submitting, students see their score and an explanation for every question. The teacher can review every attempt (filtered by level) through a password-protected admin page.

## Features
- 20 questions covering speaking strategies, reading comprehension, listening, and grammar.
- Immediate scoring with per-question feedback and a short explanation.
- Each attempt is stored in SQLite with student name, ID, score, answers, and duration.
- `/admin` shows totals, per-question difficulty, and a list of all attempts. Protected by basic auth.

## Tech stack
- Node.js + Express
- better-sqlite3 (file-based SQLite)
- Vanilla HTML/CSS/JS on the front end
- Deploys on Railway with the included `railway.json`

## Run locally

```bash
npm install
ADMIN_PASSWORD=letmein npm start
# open http://localhost:3000
# admin: http://localhost:3000/admin  (user: anything,  password: letmein)
```

## Push to GitHub

```bash
cd quiz3-app
git init
git add .
git commit -m "Initial commit: Unit 3 practice quiz"

# Option A — using GitHub CLI (recommended)
gh repo create english-a1-quiz3 --public --source=. --remote=origin --push

# Option B — manual
# Create an empty repo on github.com first, then:
git branch -M main
git remote add origin https://github.com/<your-username>/english-a1-quiz3.git
git push -u origin main
```

## Deploy to Railway

1. Go to <https://railway.app/new> and choose **Deploy from GitHub repo**.
2. Select the `english-a1-quiz3` repository.
3. Railway will detect Node from `package.json` and use `node server.js`.
4. Add an environment variable: `ADMIN_PASSWORD = <a strong password>`.
5. (Optional, for persistent attempts) Add a Railway **Volume** mounted at `/data` and set the variable `DB_PATH=/data/attempts.db`. Without a volume, the database resets on every redeploy.
6. Click **Deploy**. After it builds, open the public URL Railway gives you.

### Or via Railway CLI

```bash
npm i -g @railway/cli
railway login
railway init        # link to a new project
railway variables set ADMIN_PASSWORD=<strong-password>
railway up
```

## Where teachers check progress

- Visit `https://<your-app>.up.railway.app/admin`
- Username: anything (ignored). Password: the value of `ADMIN_PASSWORD`.
- You'll see: total attempts, average score, per-question accuracy, and a table of every attempt.

## Editing the quiz

All questions, options, correct answers, and explanations live in [`questions/a1.js`](./questions/a1.js) (English A1) and [`questions/a2.js`](./questions/a2.js) (English A2). Edit those files and redeploy — no other code changes needed.

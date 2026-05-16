(() => {
  const $ = (id) => document.getElementById(id);
  const state = {
    level: null,
    questions: [],
    answers: [],
    current: 0,
    student: { name: "", id: "" },
    startedAt: 0,
  };

  async function loadQuestions(level) {
    const res = await fetch(`/api/questions?level=${encodeURIComponent(level)}`);
    if (!res.ok) throw new Error("load failed");
    state.questions = await res.json();
    state.answers = new Array(state.questions.length).fill(null);
  }

  async function loadQuizList() {
    try {
      const res = await fetch("/api/quizzes");
      const quizzes = await res.json();
      const wrap = $("quiz-options");
      wrap.classList.remove("quiz-options-loading");
      wrap.innerHTML = quizzes.map(q => `
        <label class="level-option">
          <input type="radio" name="level" value="${q.id}" required />
          <span><strong>${q.label}</strong><small>${q.description}</small></span>
        </label>
      `).join("");
    } catch {
      $("quiz-options").textContent = "Could not load quizzes. Please reload the page.";
    }
  }
  loadQuizList();

  $("start-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const levelEl = document.querySelector('input[name="level"]:checked');
    state.level = levelEl ? levelEl.value : null;
    state.student.name = $("student-name").value.trim();
    state.student.id = $("student-id").value.trim();
    if (!state.level || !state.student.name || !state.student.id) return;
    try {
      await loadQuestions(state.level);
    } catch {
      alert("Could not load the quiz. Please reload the page.");
      return;
    }
    $("start-screen").classList.add("hidden");
    $("quiz-screen").classList.remove("hidden");
    state.startedAt = Date.now();
    render();
  });

  function isAnswered(answer, multi) {
    if (multi) return Array.isArray(answer) && answer.length > 0;
    return Number.isInteger(answer);
  }

  function render() {
    const q = state.questions[state.current];
    const total = state.questions.length;
    $("progress-bar").style.width = `${((state.current + 1) / total) * 100}%`;
    $("progress-text").textContent = `Question ${state.current + 1} of ${total}`;

    const selected = state.answers[state.current];
    const container = $("question-container");
    container.innerHTML = "";

    const skill = document.createElement("span");
    skill.className = "q-skill";
    skill.textContent = q.skill;
    container.appendChild(skill);

    if (q.multi) {
      const tag = document.createElement("span");
      tag.className = "q-multi";
      tag.textContent = "Select ALL correct answers";
      container.appendChild(tag);
    }

    const text = document.createElement("p");
    text.className = "q-text";
    text.textContent = q.text;
    container.appendChild(text);

    const opts = document.createElement("div");
    opts.className = "options";
    q.options.forEach((opt, i) => {
      const label = document.createElement("label");
      const isSelected = q.multi
        ? Array.isArray(selected) && selected.includes(i)
        : selected === i;
      label.className = "option" + (isSelected ? " selected" : "");
      const input = document.createElement("input");
      input.type = q.multi ? "checkbox" : "radio";
      input.name = `q${q.id}`;
      input.value = i;
      input.checked = isSelected;
      input.addEventListener("change", () => {
        if (q.multi) {
          const cur = Array.isArray(state.answers[state.current])
            ? state.answers[state.current].slice()
            : [];
          const idx = cur.indexOf(i);
          if (input.checked && idx === -1) cur.push(i);
          else if (!input.checked && idx !== -1) cur.splice(idx, 1);
          cur.sort();
          state.answers[state.current] = cur;
        } else {
          state.answers[state.current] = i;
        }
        render();
      });
      const span = document.createElement("span");
      span.textContent = `${"abcd"[i]}) ${opt}`;
      label.appendChild(input);
      label.appendChild(span);
      opts.appendChild(label);
    });
    container.appendChild(opts);

    $("prev-btn").disabled = state.current === 0;
    const last = state.current === total - 1;
    $("next-btn").classList.toggle("hidden", last);
    $("submit-btn").classList.toggle("hidden", !last);
  }

  $("prev-btn").addEventListener("click", () => {
    if (state.current > 0) { state.current--; render(); }
  });
  $("next-btn").addEventListener("click", () => {
    if (state.current < state.questions.length - 1) { state.current++; render(); }
  });

  $("submit-btn").addEventListener("click", async () => {
    const unanswered = state.answers.findIndex((a, i) => !isAnswered(a, state.questions[i].multi));
    if (unanswered !== -1) {
      const ok = confirm(`Question ${unanswered + 1} is unanswered. Submit anyway?`);
      if (!ok) { state.current = unanswered; render(); return; }
    }
    $("submit-btn").disabled = true;
    const durationSeconds = Math.round((Date.now() - state.startedAt) / 1000);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          level: state.level,
          studentName: state.student.name,
          studentId: state.student.id,
          answers: state.answers,
          durationSeconds,
        }),
      });
      if (!res.ok) throw new Error("submit failed");
      const data = await res.json();
      showResults(data);
    } catch {
      alert("Could not submit your answers. Please try again.");
      $("submit-btn").disabled = false;
    }
  });

  function showResults({ score, total, graded }) {
    $("quiz-screen").classList.add("hidden");
    $("results-screen").classList.remove("hidden");

    const pct = Math.round((score / total) * 100);
    let band = "low", label = "Keep practicing";
    if (pct >= 80) { band = "high"; label = "Excellent"; }
    else if (pct >= 60) { band = "mid"; label = "Good — review the misses"; }

    $("score-summary").innerHTML = `
      <p class="score-big">${score} / ${total}
        <span class="score-band ${band}">${pct}% · ${label}</span>
      </p>
      <p>Below you can see every question, the correct answer, your answer, and a short explanation.</p>
    `;

    const wrap = $("breakdown");
    wrap.innerHTML = "";
    const fmt = (indices, texts) => {
      if (!indices || indices.length === 0) return "(no answer)";
      return indices.map((ix, n) => `${"abcd"[ix]}) ${texts[n]}`).join("  ·  ");
    };
    graded.forEach((g, i) => {
      const q = state.questions[i];
      const div = document.createElement("div");
      div.className = "review-item " + (g.isCorrect ? "correct" : "incorrect");
      div.innerHTML = `
        <div class="verdict">${i + 1}. ${g.isCorrect ? "✓ Correct" : "✗ Incorrect"} <span class="q-skill">${g.skill}</span>${g.multi ? ' <span class="q-multi">multi</span>' : ""}</div>
        <div class="row"><strong>Question:</strong> <span></span></div>
        <div class="row"><strong>Your answer:</strong> ${escapeHtml(fmt(g.chosen, g.chosenTexts))}</div>
        <div class="row"><strong>Correct answer:</strong> ${escapeHtml(fmt(g.correctIndices, g.correctTexts))}</div>
        <div class="explanation"><strong>Why:</strong> ${escapeHtml(g.explanation)}</div>
      `;
      div.querySelector(".row span").textContent = q.text;
      wrap.appendChild(div);
    });
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  }

  $("retry-btn").addEventListener("click", () => location.reload());
})();

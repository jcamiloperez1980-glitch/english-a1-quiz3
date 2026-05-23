const a1 = require("./a1");
const a2 = require("./a2");
const methodsU2 = require("./methods_u2");
const a1Final = require("./a1_final");
const a2Final = require("./a2_final");

// Normalise so every question has:
//   correct: number[]   (set of correct option indices)
//   multi:   boolean    (whether the UI should render checkboxes vs radios)
function normalise(bank) {
  return bank.map(q => {
    const correctArr = Array.isArray(q.correct) ? q.correct.slice() : [q.correct];
    const multi = q.multi === true || correctArr.length > 1;
    return { ...q, correct: correctArr, multi };
  });
}

const banks = {
  A1: normalise(a1),
  A2: normalise(a2),
  METHODS_U2: normalise(methodsU2),
  A1_FINAL: normalise(a1Final),
  A2_FINAL: normalise(a2Final)
};

const meta = {
  A1: { id: "A1", label: "English A1 — Unit 3", description: "Beginner · 20 questions" },
  A2: { id: "A2", label: "English A2 — Unit 3", description: "Elementary · 20 questions" },
  METHODS_U2: {
    id: "METHODS_U2",
    label: "Approaches & Methods — Unit 2",
    description: "Methodological Approaches · 20 questions · some multi-select"
  },
  A1_FINAL: {
    id: "A1_FINAL",
    label: "English A1 — Final Exam Practice",
    description: "Beginner · 20 questions · greetings, grammar, interactions"
  },
  A2_FINAL: {
    id: "A2_FINAL",
    label: "English A2 — Final Exam Practice",
    description: "Elementary · 20 questions · all three units"
  }
};

function getBank(level) {
  const key = String(level || "").toUpperCase();
  return banks[key] || null;
}

function listQuizzes() {
  return Object.keys(banks).map(k => ({ ...meta[k], length: banks[k].length }));
}

module.exports = { banks, getBank, listQuizzes, meta };

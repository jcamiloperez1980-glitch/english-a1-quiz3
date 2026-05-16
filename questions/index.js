const a1 = require("./a1");
const a2 = require("./a2");

const banks = { A1: a1, A2: a2 };

function getBank(level) {
  const key = String(level || "").toUpperCase();
  return banks[key] || null;
}

module.exports = { banks, getBank };

import React, { useState } from "react";

const SECRET = "SPEND";
const WORD_LENGTH = 5;
const MAX_GUESSES = 5;

// Returns the color for a single guessed character at a given position.
// Simplified rules (no count-limiting):
//   green  -> character is in the secret word AND at the same position
//   yellow -> character is in the secret word but at a different position
//   red    -> character is not in the secret word at all
function colorFor(char, index) {
  if (SECRET[index] === char) return "green";
  if (SECRET.includes(char)) return "yellow";
  return "red";
}

const COLORS = {
  green: "#6aaa64",
  yellow: "#c9b458",
  red: "#cc4b4b",
  empty: "transparent",
};

export default function App() {
  const [guesses, setGuesses] = useState([]); // array of submitted words (uppercase)
  const [current, setCurrent] = useState(""); // text in the input box

  const won = guesses.includes(SECRET);
  const lost = !won && guesses.length >= MAX_GUESSES;
  const gameOver = won || lost;

  function handleSubmit(e) {
    e.preventDefault();
    if (gameOver) return;

    const word = current.toUpperCase();
    if (word.length !== WORD_LENGTH) return; // only accept full 5-letter guesses

    setGuesses([...guesses, word]);
    setCurrent("");
  }

  // Build a 5x5 grid: one row per guess slot, one cell per character.
  const rows = [];
  for (let r = 0; r < MAX_GUESSES; r++) {
    const word = guesses[r];
    const cells = [];
    for (let c = 0; c < WORD_LENGTH; c++) {
      const char = word ? word[c] : "";
      const bg = word ? COLORS[colorFor(char, c)] : COLORS.empty;
      cells.push(
        <div
          key={c}
          style={{
            width: 50,
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #999",
            backgroundColor: bg,
            fontSize: 24,
            fontWeight: "bold",
            textTransform: "uppercase",
            color: word ? "#fff" : "#000",
          }}
        >
          {char}
        </div>
      );
    }
    rows.push(
      <div key={r} style={{ display: "flex", gap: 5, marginBottom: 5 }}>
        {cells}
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20, textAlign: "center" }}>
      <h1>Wordle</h1>

      <div style={{ display: "inline-block" }}>{rows}</div>

      {won && <h2 style={{ color: COLORS.green }}>You've won!</h2>}
      {lost && <h2 style={{ color: COLORS.red }}>You've lost!</h2>}

      {!gameOver && (
        <form onSubmit={handleSubmit} style={{ marginTop: 15 }}>
          <input
            value={current}
            onChange={(e) => setCurrent(e.target.value.slice(0, WORD_LENGTH))}
            maxLength={WORD_LENGTH}
            autoFocus
            style={{ fontSize: 20, padding: 8, textTransform: "uppercase" }}
          />
        </form>
      )}
    </div>
  );
}

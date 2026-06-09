# Wordle Variation

A simplified Wordle built with React (no external libraries).

## Run

```
npm install
npm start
```

## Rules

- Guess the 5-letter secret word in 5 tries.
- After each guess, each cell is colored:
  - **green** — letter is in the word and in the correct position
  - **yellow** — letter is in the word but in a different position
  - **red** — letter is not in the word

A letter is colored yellow whenever it appears anywhere in the secret word
(no per-letter count limiting).

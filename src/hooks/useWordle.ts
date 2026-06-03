import { useEffect, useState } from "react";
import { WORD_LENGTH, type GameState, MAX_ATTEMPTS } from "../types/game";
import { checkWord } from "../utils/checkWord";
import { getRandomAnswer } from "../utils/getRandomAnswer";

const createInitialState = (): GameState => ({
  currentGuess: "",
  guesses: [],
  status: "playing",
  answer: getRandomAnswer(),
});

export function useWordle() {
  const [gameState, setGameState] = useState<GameState>(createInitialState());

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();

      setGameState((prev) => {
        if (prev.status !== "playing") {
          return prev;
        }

        // Ввод букв
        if (/^[A-Z]$/.test(key)) {
          return {
            ...prev,
            currentGuess:
              prev.currentGuess.length < WORD_LENGTH
                ? prev.currentGuess + key
                : prev.currentGuess,
          };
        }

        // Backspace
        if (e.key === "Backspace") {
          return {
            ...prev,
            currentGuess: prev.currentGuess.slice(0, -1),
          };
        }

        // Enter
        if (e.key === "Enter") {
          if (prev.currentGuess.length !== WORD_LENGTH) {
            return prev;
          }

          const states = checkWord(prev.currentGuess, prev.answer);

          const nextGuesses = [
            ...prev.guesses,
            {
              word: prev.currentGuess,
              states,
            },
          ];

          // Победа
          if (prev.currentGuess === prev.answer) {
            return {
              ...prev,
              currentGuess: "",
              guesses: nextGuesses,
              status: "won",
            };
          }

          // Поражение
          if (nextGuesses.length >= MAX_ATTEMPTS) {
            return {
              ...prev,
              currentGuess: "",
              guesses: nextGuesses,
              status: "lost",
            };
          }

          return {
            ...prev,
            currentGuess: "",
            guesses: nextGuesses,
          };
        }

        return prev;
      });
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const resetGame = () => {
    setGameState(createInitialState());
  };

  return { ...gameState, resetGame };
}

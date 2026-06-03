export type LetterState = | "correct" | "present" | "absent" | "empty";

export const WORD_LENGTH = 5;
export const MAX_ATTEMPTS = 6;

export type GameStatus = | "playing" | "won" | "lost";

export interface GameState {
   currentGuess: string;
   guesses: GuessResult[];
   status: GameStatus;
   answer: string;
}

export interface GuessResult {
   word: string;
   states: LetterState[];
}

export type KeyboardLetterStates = Record<string, LetterState>



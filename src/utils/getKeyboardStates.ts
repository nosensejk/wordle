import { type GuessResult, type KeyboardLetterStates, type LetterState } from "../types/game";

const priority: Record<LetterState, number> = {
   empty: 0,
   absent: 1,
   present: 2,
   correct: 3,
};

export function getKeyboardStates(guesses: GuessResult[]):KeyboardLetterStates {
   const result: KeyboardLetterStates = {};

   for (const guess of guesses) {
      guess.word.split("").forEach((letter, index) => {
         const state = guess.states[index];
         const currentState = result[letter];

         if(!currentState) {
            result[letter] = state;
            return;
         }

         if( priority[state] > priority[currentState]) {
            result[letter] = state;
         }
      })
   }

   return result;
}
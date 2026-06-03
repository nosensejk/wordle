import { MAX_ATTEMPTS, type GuessResult } from "../types/game";
import { Row } from "./Row";

interface BoardProps {
   guesses: GuessResult[];
   currentGuess: string;
}

export function Board({guesses, currentGuess}: BoardProps) {
   const rows = Array.from({length: MAX_ATTEMPTS});

  return (
   <div className="grid gap-1">
      {rows.map((_, rowIndex) => {
         let word = "";
         let states = undefined;

         if (rowIndex < guesses.length) {
            word = guesses[rowIndex].word;
            states = guesses[rowIndex].states;
         } else if (rowIndex === guesses.length) {
            word = currentGuess;
         }

         return (
            <Row key={rowIndex} word={word} states={states}/>
         )
      })}
   </div>
  );
}

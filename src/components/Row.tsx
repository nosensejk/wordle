import { WORD_LENGTH, type LetterState } from "../types/game";
import { Tile } from "./Tile";

interface RowProps {
  word: string;
  states?:LetterState[];
}

export function Row({ word, states }: RowProps) {
  return (
    <div className="flex gap-1">
      {Array.from({
        length: WORD_LENGTH,
      }).map((_, index) => (
        <Tile key={index} letter={word[index]} state={states?.[index] ?? "empty"}/>
      ))}
    </div>
  );
}

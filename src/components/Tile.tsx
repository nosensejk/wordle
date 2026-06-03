import type { LetterState } from "../types/game";

interface TileProps {
  letter?: string;
  state?: LetterState;
}

const stateStyles = {
  empty: "border-zinc-700 bg-transparent",
  correct: "border-green-500 bg-green-500",
  present: "border-yellow-500 bg-yellow-500",
  absent: "border-zinc-600 bg-zinc-600",
};

export function Tile({ letter = "", state = "empty" }: TileProps) {

   const hasLetter = letter.length > 0;
  return (
    <div className={`flex h-14 w-14 items-center justify-center border-2 text-2xl font-bold uppercase transition-all duration-150 ${state === "empty" ? hasLetter ? "border-zinc-500" : "border-zinc-700" : stateStyles[state]}`}>
      {letter}
    </div>
  );
}

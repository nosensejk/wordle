import { type KeyboardLetterStates } from "../types/game";
import { Delete } from "lucide-react";

interface KeyboardProps {
  onKeyPress: (key: string) => void;
  letterStates: KeyboardLetterStates;
}

const rows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"],
];

const stateStyles = {
  empty: "",
  correct: "bg-green-500 text-white",
  present: "bg-yellow-500 text-white",
  absent: "bg-zinc-500 text-white",
};

export function Keyboard({ onKeyPress, letterStates }: KeyboardProps) {
  return (
    <div className="mt-8 flex flex-col gap-2">
      {rows.map((row) => (
        <div key={row.join("")} className="flex justify-center gap-1">
          {row.map((key) => {
            const state = letterStates[key];
            return (
              <button
                key={key}
                onClick={() => onKeyPress(key)}
                className={`rounded px-3 py-4 font-semibold transition-colors ${state ? stateStyles[state] : "bg-zinc-700 hover:bg-zinc-600"}`}
              >
                {key === "BACKSPACE" ? (<Delete size={20}/>) : (key)}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

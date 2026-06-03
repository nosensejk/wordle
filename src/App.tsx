import { Board } from "./components/Board";
import { useWordle } from "./hooks/useWordle";
import { Keyboard } from "./components/Keyboard";
import { getKeyboardStates } from "./utils/getKeyboardStates";

function App() {
  const { guesses, currentGuess, status, answer, resetGame, handleKey } =
    useWordle();

    const keyboardStates = getKeyboardStates(guesses);

  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center py-8">
        <h1 className="mb-8 text-4xl font-bold">Wordle</h1>
        <Board guesses={guesses} currentGuess={currentGuess} />
        {status === "won" && (
          <div className="mt-6 text-center">
            <p className="text-xl font-bold text-green-500">You won!</p>

            <button
              onClick={resetGame}
              className="mt-4 rounded bg-green-600 px-4 py-2"
            >
              New Game
            </button>
          </div>
        )}

        {status === "lost" && (
          <div className="mt-6 text-center">
            <p className="text-xl font-bold text-red-500">You lost</p>

            <p className="mt-2">Answer: {answer}</p>

            <button
              onClick={resetGame}
              className="mt-4 rounded bg-red-600 px-4 py-2"
            >
              New Game
            </button>
          </div>
        )}
      </div>

      <Keyboard onKeyPress={handleKey} letterStates={keyboardStates}/>
    </main>
  );
}

export default App;

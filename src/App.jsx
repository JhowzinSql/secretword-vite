import { useCallback, useEffect, useState } from "react";

<<<<<<< HEAD
=======
// components
>>>>>>> 6ce2b44553b61bd5dee6a4a4cd6377f00dfc792b
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

<<<<<<< HEAD
import "./App.css";

=======
// styles
import "./App.css";

// data
>>>>>>> 6ce2b44553b61bd5dee6a4a4cd6377f00dfc792b
import { wordsList } from "./data/words";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

<<<<<<< HEAD
const DIFFICULTY_LIVES = {
  facil: 5,
  normal: 3,
  dificil: 2,
};

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [useExternalAPI, setUseExternalAPI] = useState(false);
  const [difficulty, setDifficulty] = useState("normal");
=======
function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
>>>>>>> 6ce2b44553b61bd5dee6a4a4cd6377f00dfc792b
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
<<<<<<< HEAD
  const [guesses, setGuesses] = useState(DIFFICULTY_LIVES[difficulty]);
  const [score, setScore] = useState(0);

  const pickWordAndCategoryLocal = useCallback(() => {
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    return { category, word };
  }, [words]);

  const fetchExternalWord = useCallback(async () => {
    const endpoints = [
      "https://random-word-api.herokuapp.com/word?number=1",
      "https://random-word-form.repl.co/random/noun",
      "https://random-word-form.repl.co/random/adjective",
    ];
    for (const url of endpoints) {
      try {
        const res = await fetch(url);
        if (!res.ok) continue;
        const data = await res.json();
        let w = Array.isArray(data) ? data[0] : (Array.isArray(data.word) ? data.word[0] : (data[0] || data.word || data));
        if (typeof w === "string" && w.length >= 3) {
          return w.toLowerCase();
        }
      } catch (e) {}
    }
    return null;
  }, []);

  const pickWordAndCategory = useCallback(async () => {
    if (useExternalAPI) {
      const extWord = await fetchExternalWord();
      if (extWord) {
        return { category: "aleatório", word: extWord };
      }
    }
    return pickWordAndCategoryLocal();
  }, [useExternalAPI, fetchExternalWord, pickWordAndCategoryLocal]);

  const startGame = useCallback(async (opts) => {
    if (opts?.difficulty) {
      setDifficulty(opts.difficulty);
      setGuesses(DIFFICULTY_LIVES[opts.difficulty]);
    } else {
      setGuesses(DIFFICULTY_LIVES[difficulty]);
    }
    if (typeof opts?.useExternalAPI === "boolean") {
      setUseExternalAPI(opts.useExternalAPI);
    }

    setGuessedLetters([]);
    setWrongLetters([]);

    const { category, word } = await pickWordAndCategory();
=======
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { category, word };
  }, [words]);

  const startGame = useCallback(() => {
    setGuessedLetters([]);
    setWrongLetters([]);

    const { category, word } = pickWordAndCategory();
>>>>>>> 6ce2b44553b61bd5dee6a4a4cd6377f00dfc792b

    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
<<<<<<< HEAD
  }, [pickWordAndCategory, difficulty]);

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase().trim();
    if (!normalizedLetter) return;
=======
  }, [pickWordAndCategory]);

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();
>>>>>>> 6ce2b44553b61bd5dee6a4a4cd6377f00dfc792b

    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const retry = () => {
    setScore(0);
<<<<<<< HEAD
    setGuesses(DIFFICULTY_LIVES[difficulty]);
    setGameStage(stages[0].name);
  };

  useEffect(() => {
    if (guesses === 0) {
      const currentHighScore = parseInt(localStorage.getItem("highscore")) || 0;
      if (score > currentHighScore) {
        localStorage.setItem("highscore", score);
      }
=======
    setGuesses(3);
    setGameStage(stages[0].name);
  };

  // useEffect para a condição de derrota e para salvar o high score
  useEffect(() => {
    if (guesses === 0) {
      // Pega o high score salvo. parseInt converte o texto para número.
      const currentHighScore = parseInt(localStorage.getItem("highscore")) || 0;

      // Compara a pontuação da rodada com o recorde salvo.
      if (score > currentHighScore) {
        // Se for maior, salva o novo valor, sobrescrevendo o antigo.
        localStorage.setItem("highscore", score);
      }

>>>>>>> 6ce2b44553b61bd5dee6a4a4cd6377f00dfc792b
      setGuessedLetters([]);
      setWrongLetters([]);
      setGameStage(stages[2].name);
    }
<<<<<<< HEAD
  }, [guesses, score]);

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];
=======
  }, [guesses, score]); // ATENÇÃO: Adicionamos 'score' à dependência

  // useEffect para a condição de vitória
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

>>>>>>> 6ce2b44553b61bd5dee6a4a4cd6377f00dfc792b
    if (letters.length > 0 && guessedLetters.length === uniqueLetters.length) {
      setScore((actualScore) => (actualScore += 100));
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  return (
    <div className="App">
<<<<<<< HEAD
      {gameStage === "start" && (
        <StartScreen
          startGame={startGame}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          useExternalAPI={useExternalAPI}
          setUseExternalAPI={setUseExternalAPI}
        />
      )}

=======
      {gameStage === "start" && <StartScreen startGame={startGame} />}
>>>>>>> 6ce2b44553b61bd5dee6a4a4cd6377f00dfc792b
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
<<<<<<< HEAD
          difficulty={difficulty}
        />
      )}

=======
        />
      )}
>>>>>>> 6ce2b44553b61bd5dee6a4a4cd6377f00dfc792b
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;

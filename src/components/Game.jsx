<<<<<<< HEAD
import { useState, useRef, useMemo } from "react";
import "./Game.css";

const BASE_KEYS = "abcdefghijklmnopqrstuvwxyz".split("");
const PT_EXTRA_KEYS = ["á","â","ã","à","é","ê","í","ó","ô","õ","ú","ç"];

=======
import { useState, useRef } from "react";
import "./Game.css";

>>>>>>> 6ce2b44553b61bd5dee6a4a4cd6377f00dfc792b
const Game = ({
  verifyLetter,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
<<<<<<< HEAD
  difficulty,
=======
>>>>>>> 6ce2b44553b61bd5dee6a4a4cd6377f00dfc792b
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    if (!letter) return;
    verifyLetter(letter);
    setLetter("");
    letterInputRef.current?.focus();
  };

  const keys = useMemo(() => [...BASE_KEYS, ...PT_EXTRA_KEYS], []);

  const isUsed = (k) =>
    guessedLetters.includes(k) || wrongLetters.includes(k);

=======
    verifyLetter(letter);
    setLetter("");
    letterInputRef.current.focus();
  };

>>>>>>> 6ce2b44553b61bd5dee6a4a4cd6377f00dfc792b
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação</span>: {score}
      </p>

      <h1>Advinhe a palavra:</h1>

      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>

<<<<<<< HEAD
      <p>Você ainda tem <b>{guesses}</b> tentativa(s) — Dificuldade: <b>{difficulty}</b></p>
=======
      <p>Você ainda tem {guesses} tentativa(s).</p>
>>>>>>> 6ce2b44553b61bd5dee6a4a4cd6377f00dfc792b

      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span className="letter" key={i}>
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>

      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength="1"
            onChange={(e) => setLetter(e.target.value)}
            required
            value={letter}
            ref={letterInputRef}
          />
          <button>Jogar!</button>
        </form>
      </div>

<<<<<<< HEAD
      <div className="virtualKeyboard">
        {keys.map((k) => (
          <button
            key={k}
            className={isUsed(k) ? "used" : ""}
            onClick={() => verifyLetter(k)}
            disabled={isUsed(k)}
            aria-label={`Letra ${k}`}
          >
            {k}
          </button>
        ))}
      </div>

      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        <p className="wrongList">
          {wrongLetters.map((l, i) => (
            <span key={i}>
              {l}
              {i < wrongLetters.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
=======
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
>>>>>>> 6ce2b44553b61bd5dee6a4a4cd6377f00dfc792b
      </div>
    </div>
  );
};

export default Game;

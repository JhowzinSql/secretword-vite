import "./StartScreen.css";

const StartScreen = ({ startGame, difficulty, setDifficulty, useExternalAPI, setUseExternalAPI }) => {
  const handleStart = () => {
    startGame({ difficulty, useExternalAPI });
  };

  return (
    <div className="start">
      <h1>Secret Word 🤫</h1>
      <p>Selecione a dificuldade e clique para começar 👇</p>

      <div className="difficulties">
        <button
          className={difficulty === "facil" ? "active" : ""}
          onClick={() => setDifficulty("facil")}
        >
          Fácil (5 vidas)
        </button>
        <button
          className={difficulty === "normal" ? "active" : ""}
          onClick={() => setDifficulty("normal")}
        >
          Normal (3 vidas)
        </button>
        <button
          className={difficulty === "dificil" ? "active" : ""}
          onClick={() => setDifficulty("dificil")}
        >
          Difícil (2 vidas)
        </button>
      </div>

      <label className="api-toggle">
        <input
          type="checkbox"
          checked={useExternalAPI}
          onChange={(e) => setUseExternalAPI(e.target.checked)}
        />
        Usar API externa para buscar palavras
      </label>

      <button onClick={handleStart}>Começar jogo</button>
    </div>
  );
};

export default StartScreen;

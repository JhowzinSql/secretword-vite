import "./StartScreen.css";

<<<<<<< HEAD
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
=======
const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word 🤫</h1>
      <p>Clique no botão abaixo para começar a jogar 👇</p>
      <button onClick={startGame}>Começar jogo</button>
>>>>>>> 6ce2b44553b61bd5dee6a4a4cd6377f00dfc792b
    </div>
  );
};

export default StartScreen;

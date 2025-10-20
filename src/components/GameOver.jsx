import "./GameOver.css";

const GameOver = ({ retry, score }) => {
<<<<<<< HEAD
=======
  // 1. Tenta pegar o item "highscore". Se não existir, o valor será null.
  // 2. O operador || (OU) garante que, se for null, o valor padrão será 0.
>>>>>>> 6ce2b44553b61bd5dee6a4a4cd6377f00dfc792b
  const highScore = localStorage.getItem("highscore") || 0;

  return (
    <div className="gameover">
      <h2>Fim de jogo! 😵</h2>
      <p>
        A sua pontuação foi: <span>{score}</span>!
      </p>
      <p>
        Pontuação Máxima: <span>{highScore}</span> 👑
      </p>
      <button onClick={retry}>Tentar Novamente 🔄</button>
    </div>
  );
};

export default GameOver;

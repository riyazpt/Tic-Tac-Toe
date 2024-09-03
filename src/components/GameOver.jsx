import React from "react";

function GameOver({winner, reStart}) {
  return (
    <div id="game-over">
      <h1>Game over!</h1>
      {winner && <p> {winner} Won</p>}
      {!winner && <p>draw!</p>}
      <button onClick={reStart}>Restart</button>
    </div>
  );
}

export default GameOver;

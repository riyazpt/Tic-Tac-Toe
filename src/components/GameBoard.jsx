import React from "react";
export default function GameBoard({onSelectSquare, board}) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          {
            <ol>
              {row.map((playerSymbol, columnIndex) => (
                <li key={columnIndex}>
                  <button
                    onClick={() => onSelectSquare(rowIndex, columnIndex)}
                    disabled={playerSymbol !== null}
                  >
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          }
        </li>
      ))}
    </ol>
  );
}

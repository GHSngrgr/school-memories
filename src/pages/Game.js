// File: src/pages/Game.js
import React, { useState } from 'react';
import './Game.css';

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  const status = winner
    ? `🏆 Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const handleClick = (i) => {
    if (squares[i] || winner) return;
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="game-section">
      <h3>🎮 Tic-Tac-Toe</h3>
      <div className="status">{status}</div>
      <div className="board">
        {[0, 1, 2].map((row) => (
          <div className="board-row" key={row}>
            {[0, 1, 2].map((col) => {
              const idx = row * 3 + col;
              return (
                <Square key={idx} value={squares[idx]} onClick={() => handleClick(idx)} />
              );
            })}
          </div>
        ))}
      </div>
      <button className="reset-button" onClick={handleReset}>🔁 Restart Game</button>
    </div>
  );
}

function MoreGames() {
  return (
    <div className="game-section">
      <h3>🎲 More Fun Games on Poki.com</h3>
      <p>
        Want more fun? Click below to play thousands of exciting free games like Subway Surfers, Cricket, Football, and more!
      </p>
      <a
        href="https://poki.com"
        target="_blank"
        rel="noopener noreferrer"
        className="poki-button"
      >
        🔗 Play on Poki.com
      </a>
    </div>
  );
}

function Game() {
  return (
    <div className="page game">
      <h2>🎮 School Friends Game Zone</h2>
      <TicTacToe />
      <MoreGames />
    </div>
  );
}

// Helper function to calculate winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;

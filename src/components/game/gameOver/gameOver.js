import React from 'react';

const GameOver = (props) => {
    let { totalShootCount, onSaveGame, playAgain} = props
    let total = 20;

    return (
      <div className="modal">
        <div className="modal-content">
          <h1>Game Over</h1>
          <p>
            You have <strong>{ totalShootCount } of {total} pts </strong>
          </p>
          <button onClick={onSaveGame}> Save Game </button>
          <button onClick={playAgain}> play Again </button>
        </div>
      </div>
    );
  }
export default GameOver;
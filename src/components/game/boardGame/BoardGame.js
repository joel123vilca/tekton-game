import React from 'react';
import Cell from './cell/Cell'
import '../../../App.scss';

const BoardGame = (props) =>  {
  const { board, onCellClick } = props;
    return (
      <div className="board">
        {board?.map((item, index) => (
          <div className="row" key={index}>
            {item.map((cell, colIndex) => (
              <Cell
                key={index + "" + colIndex}
                onCellClick={() =>
                  onCellClick(cell)
                }
                cell={cell}
              />
            ))  }
          </div>
        ))}
      </div>
    );
  }
export default BoardGame;
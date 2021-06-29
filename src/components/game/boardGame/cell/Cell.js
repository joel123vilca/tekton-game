import React from 'react';
import './cell.scss';

const Cell = (props) => {
  const {cell, onCellClick} = props;
  return (
    <div
      className={
        cell?.isSelected ? cell?.isShip ? "ship" : "selected" : "cell"
      }
      onClick={onCellClick}
    ></div>
  );
}
export default Cell;
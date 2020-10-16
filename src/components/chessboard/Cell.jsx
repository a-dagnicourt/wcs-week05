import React from 'react';
import './Chessboard.css';

export default function Cell(props) {
  return (
    <div
      className={
        (props.cellIndex + props.rowIndex) % 2 === 0
          ? 'cell cell-white'
          : 'cell cell-black'
      }></div>
  );
}

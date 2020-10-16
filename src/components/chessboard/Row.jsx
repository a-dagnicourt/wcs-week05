import React from 'react';
import Cell from './Cell';

export default function Row(props) {
  return (
    <div>
      {new Array(props.colIndex).fill('').map((_, i) => {
        return <Cell rowIndex={props.rowIndex} cellIndex={i} key={i} />;
      })}
    </div>
  );
}

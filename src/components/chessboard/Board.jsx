import React from 'react';
import Row from './Row';

export default function Board(props) {
  return (
    <div className='board'>
      {new Array(props.rows).fill('').map((_, i) => {
        return <Row rowIndex={i} colIndex={props.cols} key={i} />;
      })}
    </div>
  );
}

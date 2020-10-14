import React from 'react';
import './Hello.css';

function Hello() {
  const wilder = 'Wilder';

  return (
    <div className='hello'>
      <h1>Hello {wilder}</h1>
      <button className='waves-effect waves-light btn cyan'>
        Simpson's Quotes
      </button>
    </div>
  );
}

export default Hello;

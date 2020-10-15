import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  plus = () => {
    const count = this.state.count;
    this.setState({ count: count + 1 });
  };

  minus = () => {
    const count = this.state.count;
    this.setState({ count: count - 1 });
  };

  render() {
    return (
      <div className='counter-div'>
        <div className='counter-div counter-display'>{this.state.count}</div>
        <button className='btn cyan' onClick={this.plus}>
          +
        </button>
        <button className='btn cyan' onClick={this.minus}>
          -
        </button>
      </div>
    );
  }
}

export default Counter;

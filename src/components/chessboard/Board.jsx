import React from 'react';
import Row from './Row';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rowCount: 0,
      colCount: 0,
    };
  }
  rowPlus = () => {
    const rowCount = this.state.rowCount;
    this.setState({ rowCount: rowCount + 1 });
  };

  rowMinus = () => {
    const rowCount = this.state.rowCount;
    this.setState({ rowCount: rowCount - 1 });
  };
  colPlus = () => {
    const colCount = this.state.colCount;
    this.setState({ colCount: colCount + 1 });
  };

  colMinus = () => {
    const colCount = this.state.colCount;
    this.setState({ colCount: colCount - 1 });
  };

  generateChess = () => {
    return new Array(this.state.rowCount).fill('').map((_, i) => {
      return <Row rowIndex={i} colIndex={this.state.colCount} key={i} />;
    });
  };

  render() {
    return (
      <div className='board row collection'>
        <div className='col s12 collection-item active cyan darken-3'>
          <h5>Rows : {this.state.rowCount}</h5>
        </div>
        <button className='col s6 btn cyan' onClick={this.rowPlus}>
          Row +
        </button>
        <button className='col s6 btn cyan' onClick={this.rowMinus}>
          Row -
        </button>
        <div className='col s12 collection-item active cyan darken-3'>
          <h5> Cols : {this.state.colCount}</h5>
        </div>
        <button className='col s6 btn cyan' onClick={this.colPlus}>
          Col +
        </button>
        <button className='col s6 btn cyan' onClick={this.colMinus}>
          Col -
        </button>
        <button
          className='btn cyan col s12 cyan darken-3'
          onClick={this.generateChess}>
          Generate
        </button>
        {new Array(this.state.rowCount).fill('').map((_, i) => {
          return <Row rowIndex={i} colIndex={this.state.colCount} key={i} />;
        })}
      </div>
    );
  }
}

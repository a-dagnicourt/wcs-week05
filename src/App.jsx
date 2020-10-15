import React from 'react';

import Hello from './components/Hello.jsx';
// import WorkshopButton from './components/WorkshopButton.jsx';
import Counter from './components/counter/Counter.jsx';
import AvatarList from './components/avatar/AvatarList.jsx';

import Board from './components/chessboard/Board.jsx';

import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpsons: false,
      counter: false,
      chess: false,
    };
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <Hello />
        </header>
        <main>
          <div className='buttons-block'>
            <button
              className='waves-effect waves-light btn cyan'
              onClick={(e) => {
                this.setState({
                  simpsons: true,
                });
              }}>
              Simpson's Quotes
            </button>
            <button
              className='waves-effect waves-light btn cyan'
              onClick={(e) => {
                this.setState({
                  counter: true,
                });
              }}>
              Counter
            </button>
            <button
              className='waves-effect waves-light btn cyan'
              onClick={(e) => {
                this.setState({
                  chess: true,
                });
              }}>
              Chessboard
            </button>
          </div>
          <div className='workshop-block fa-col'>
            {this.state.simpsons && <AvatarList />}
            {this.state.counter && <Counter />}
            {this.state.chess && <Board rows={8} cols={8} />}
          </div>
        </main>
      </div>
    );
  }
}

export default App;

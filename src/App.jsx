import React from 'react';

import Hello from './components/Hello.jsx';
// import WorkshopButton from './components/WorkshopButton.jsx';
import Counter from './components/Counter.jsx';
import AvatarList from './components/AvatarList.jsx';

import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpsons: false,
      counter: false,
    };
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <Hello />

          <div>
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
          </div>
          {this.state.simpsons && <AvatarList />}
          {this.state.counter && <Counter />}
        </header>
      </div>
    );
  }
}

export default App;

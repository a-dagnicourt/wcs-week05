import React from 'react';

import Hello from './components/Hello.jsx';
import Counter from './components/Counter.jsx';
import AvatarList from './components/AvatarList.jsx';
import WorkshopButton from './components/WorkshopButton.jsx';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Hello />
        <WorkshopButton />
        <Counter />
        <AvatarList />
      </header>
    </div>
  );
}

export default App;

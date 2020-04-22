import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentName, setName] = useState(0);

  useEffect(() => {
    fetch('./time').then(res => res.json()).then(data => {
      setCurrentTime(data.time)
    });

    fetch('./name').then(res => res.json()).then(data => {
      setName(data.name)
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>The current time is {currentTime}.</p>
        <p>My name is {currentName}</p>
      </header>
    </div>
  );
}

export default App;

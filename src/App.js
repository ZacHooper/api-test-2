import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentName, setName] = useState(0);
  const [currentSnapshot_id, setSnapshot_id] = useState(0);

  useEffect(() => {
    fetch('./time').then(res => res.json()).then(data => {
      setCurrentTime(data.time)
    });

    fetch('./name').then(res => res.json()).then(data => {
      setName(data.name)
    })

    fetch('./api/playlist').then(res => res.json()).then(data => {
      setSnapshot_id(data.snapshot_id)
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
        <p>No Hip Hop Hitlist created with snapshot id of: {currentSnapshot_id}</p>
      </header>
    </div>
  );
}

export default App;

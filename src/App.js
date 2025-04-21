import logo from './logo.svg';
import './App.css';

import React from 'react';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. saved
        </p>
        <h1>hi sara</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyFunction />
      </header>

    </div>
  );
}
function MyFunction() {
  return (
    <div>
      <h1>My Function</h1>
      <p>This is my function component.</p>
    </div>
  );
}


export default App;

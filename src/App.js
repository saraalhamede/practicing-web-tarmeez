import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './component/MyFirstComponent';
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
        <MyFirstComponent />
      </header>

    </div>
  );
}



export default App;

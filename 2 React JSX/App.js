import * as React from 'react';
import logo from './logo.svg';
import './App.css';

function getTitle(title) {
  return title;
  }
  
  
function App() {
  const title = 'React';
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        <h1>Hello {getTitle('React')}
        </h1>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

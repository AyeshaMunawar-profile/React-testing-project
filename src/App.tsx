import React from 'react';
import Greeting from './container/Greeting/Greeting';
import './App.css';
import Sum from './components/Sum/Sum';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Sum />
      </header>
    </div>
  );
}

export default App;
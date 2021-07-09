import React from 'react';
import logo from './logo.svg';
import Documentation from "./Documentation";
import './App.css';

function App() {
  const headerText = "Front End Developer"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Christian Parker
        </p>
        <p>
          {headerText}
        </p>
        <Documentation />
      </header>
    </div>
  );
}

export default App;

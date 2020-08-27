import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Typer from './components/Typer';
function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Typer />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import WhatIDo from './components/WhatIDo/index';
function App() {

  const [headerColor, setHeaderColor] = useState("rgba(0,0,0,0.2)");

  const listenScrollEvent = () => {
    window.scrollY > 50
      ? setHeaderColor("rgba(0,0,0,0.2)")
      : setHeaderColor("#222831")
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  })
  return (
    <div className="App">
      <div className="box overlay">

        <Header colorBackground={headerColor} />
        <Body />
      </div>
      <div >
        <WhatIDo />
      </div>
      <div style={{ backgroundColor: 'yellow', width: '200px', height: '200px' }}>

      </div>
    </div>
  );
}

export default App;

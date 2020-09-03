import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
function App() {

  const [headerColor, setHeaderColor] = useState("rgba(0,0,0,0.2)");
  const [fontColor, setFontColor] = useState("#eeeeee");

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
      <div class="box overlay">

        <Header colorBackground={headerColor} fontColor={fontColor} />
        <Body />
      </div>
      {/* <Body /> */}
    </div>
  );
}

export default App;

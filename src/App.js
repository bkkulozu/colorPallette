import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function App() {

  const[renk, setRenk]= useState("green");
  const renkDegisimi=useRef(null);

  const degisim=()=>
  {
    //background color settings
    document.body.style.backgroundColor=renkDegisimi.current.value;
    console.log(renkDegisimi.current.className);
    setRenk(()=> renkDegisimi.current.value);
  }

  return (
    <div className="App">
      <h1> Color Palette </h1> 
      <p> Please enter any color code or name in input.  </p>
      <input type="text" ref={renkDegisimi} onChange={degisim} className="renk-ornek" />
      <p> {renk} </p>

    </div>
  );
}

export default App;

import React from 'react';
import { ColourPalet } from './Components/ColourPalet';
import './App.css';


function App() {
  const myColours = ["#000000", "#0000ff", "#86592d", "#808080", "#00e600", "#e600e6", "#990099", "#e60000", "#ffffff" , "#ffff00" ];

  return (
    <div className="App">
      <ColourPalet colours={myColours} />
    </div>
  );
}

export default App;
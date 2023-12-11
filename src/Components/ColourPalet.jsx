import React from 'react';


export function ColourPalet({ colours }) {

  const clickColour = (event) => {
    console.log("CLICKED!") //placeholder for API
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon Colour Wheel</h1>

        <div className="colour-palette" >
          {colours.map((colour, index) => (
            <div key={index} className="colour-dot" style={{ backgroundColor: colour }} onClick={clickColour}></div>
          ))}
        </div>
      </header>
    </div>
  );
}


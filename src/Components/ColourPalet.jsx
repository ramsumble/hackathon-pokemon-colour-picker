import React from 'react';


export function ColourPalet({ colours }) {

  const clickColour = (event) => {
    console.log("CLICKED!") //placeholder for API
  }

  const mouseOver = (event) => {
    const target = event.target;
    target.style.transform = "scale(1.1)"
  }

  const mouseLeave = (event) => {
    const target = event.target;
    target.style.transform = "scale(1)"
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon Colour Wheel</h1>

        <div className="colour-palette" >

          {colours.map((colour, index) => (
            <div 
            key={index} 
            className="colour-dot" 
            style={{ backgroundColor: colour }} 
            onClick={clickColour}
            onMouseEnter={mouseOver}
            onMouseLeave={mouseLeave}>
            </div>
          ))}

        </div>
      </header>
    </div>
  );
}


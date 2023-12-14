import React, { useState } from 'react';
import DropdownMenu from './DropDownMenu';

export function ColourPalet({ colours }) {
  const [selectedColourIndex, setSelectedColourIndex] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPokemonNames, setSelectedPokemonNames] = useState(null);

  const fetchPokemonNames = async (colourIndex) => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon-color/${Number(colourIndex) + 1}/`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    //extract the pokemon names from the API 
    const allPokemonNames = data.pokemon_species.map((pokemon) => pokemon.name);

    // update state variables
    setSelectedColourIndex(colourIndex);
    setIsDropdownOpen(true);
    setSelectedPokemonNames(allPokemonNames);
  };

  const clickColour = async (event) => {
    const colourIndex = event.target.getAttribute('data-index');
    if (colourIndex === selectedColourIndex && isDropdownOpen) {
      setIsDropdownOpen(false);   // If the same colour is clicked and the dropdown is open, close it

    } else {
      // fetch Pokemon names for the new colour
      await fetchPokemonNames(colourIndex);
    }
  };

  const mouseOver = (event) => {
    const target = event.target;
    target.style.transform = 'scale(1.1)';
  };

  const mouseLeave = (event) => {
    const target = event.target;
    target.style.transform = 'scale(1)';
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon Colour Wheel</h1>

        <div className="colour-palette">
          {colours.map((colour, index) => (
            <div
              key={index}
              className="colour-dot"
              style={{ backgroundColor: colour }}
              onClick={clickColour}
              onMouseEnter={mouseOver}
              onMouseLeave={mouseLeave}
              data-index={index}
            ></div>
          ))}
        </div>

        {isDropdownOpen && <DropdownMenu pokemonNames={selectedPokemonNames || []} />}
      </header>
    </div>
  );
}

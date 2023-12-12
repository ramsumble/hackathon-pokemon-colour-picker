import React, { useState } from 'react';
import { PokemonInfo } from './PokemonInfo';

export function ColourPalet({ colours }) {
  const [selectedPokemonNames, setSelectedPokemonNames] = useState(null);

  const clickColour = async (event) => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon-color/1/`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    const allPokemonNames = data.pokemon_species.map((pokemon) => pokemon.name);
    setSelectedPokemonNames(allPokemonNames);
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

        <PokemonInfo pokemonNames={selectedPokemonNames} />
      </header>
    </div>
  );
}
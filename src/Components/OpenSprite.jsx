import React, { useState, useEffect } from 'react';

const OpenSprite = ({ pokemon, onItemClick }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
    }
  };

  const handleClick = () => {
    console.log(`Selected Pokemon: ${pokemon}`);
    if (onItemClick) {
      onItemClick(pokemon);
    }
    setHasBeenClicked(!hasBeenClicked);
  };

  useEffect(() => {
    if (hasBeenClicked) {
      fetchData();
    }
  }, [hasBeenClicked, pokemon]);

  return (
    <div onClick={handleClick}>
      {pokemon}
      {pokemonData && (
        <img
          alt="pokemon sprite"
          src={pokemonData.sprites.front_default}
        />
      )}
    </div>
  );
};

export default OpenSprite;

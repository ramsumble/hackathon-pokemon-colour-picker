import React from 'react';
import OpenSprite from './OpenSprite';

const DropdownMenu = ({ pokemonNames, onItemSelected }) => {
  return (
    <div className="dropdown">
      <div className="scrollable-menu">
        <ul className="menu">
          {pokemonNames.map((pokemon, index) => (
            <OpenSprite
              key={index}
              pokemon={pokemon}
              onItemClick={onItemSelected}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
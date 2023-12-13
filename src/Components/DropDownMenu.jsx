import React from 'react';

const DropdownMenu = ({ pokemonNames }) => {
  return (
    <div className="dropdown">
      <div className="scrollable-menu">
        <ul className="menu">
          {pokemonNames.map((pokemon, index) => (
            <li key={index}>{pokemon}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
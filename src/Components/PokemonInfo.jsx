import React from 'react';
import { ListGroup } from 'react-bootstrap';


export function PokemonInfo({ pokemonNames }) {
  return (
    <div className="pokemon-info">
      {pokemonNames && (
        <div>
          <ListGroup >
            {pokemonNames.map((name, index) => (
              <ListGroup.Item key={index}>{name}</ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      )}
    </div>
  );
}
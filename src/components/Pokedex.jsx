import React from 'react';
import { TypeEmojis } from './TypeEmojis';

const Pokedex = ({ pokemon, pokeChosen, pokeFail, toggleFavorito, favoritos }) => {
  const isFavorito = favoritos.some(fav => fav.number === pokemon.number);

  return (
    <section className="pokedex-noresult">
      {!pokeFail ? <h3></h3> : <h3 className="fail">No hay resultados</h3>}
      {!pokeChosen ? (
        <h2 className="please">Busca un Pokémon</h2>
      ) : (
        <section className='pokedex'>
          <div className="pokedex-header">
            <small>Nombre</small>
            <h2>{pokemon.name}</h2>

          </div>
          <div className='pokedex-body'>
            <div className="pokedex-imagen">
              <img src={pokemon.img} alt={pokemon.name} />
              <h3 className="num">No. {pokemon.number}</h3>
            </div>
            <div className='pokedex-info'>

              <div className="stats">
                <div>
                  <small>HP</small>
                  <h3>{pokemon.hp}</h3>
                </div>
                <div>
                  <small>Ataque</small>
                  <h3>{pokemon.attack}</h3>
                </div>
                <div>
                  <small>Defensa</small>
                  <h3>{pokemon.defense}</h3>
                </div>
              </div>
              <div className="type">
                <small>Tipo</small>
                <h3>
                  {pokemon.type}
                  <TypeEmojis type={pokemon.type} />
                </h3>
              </div>
            </div>
          </div>
          <button className="btn agregarfav" onClick={() => toggleFavorito(pokemon)}>
              {isFavorito ? '💖 Quitar de Favoritos' : '🤍 Añadir a Favoritos'}
            </button>
        </section>
      )}
    </section>
  );
};

export default Pokedex;

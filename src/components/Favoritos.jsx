import React from 'react';

const Favoritos = ({ favoritos, className, toggleVisible }) => {
  return (
    <aside className={`favoritos ${className}`}>
      <button class="btn btn-close" className="close-button" onClick={toggleVisible}></button>
      <h2>Pokémon Favoritos</h2>
      <div className="favoritos-lista">
        {favoritos.length === 0 ? (
          <p>No hay Pokémon favoritos</p>
        ) : (
          favoritos.map((pokemon) => (
            <div key={pokemon.number} className="favorito-item">
              <img src={pokemon.img} alt={pokemon.name} />
              <p>{pokemon.name}</p>
            </div>
          ))
        )}
      </div>
    </aside>
  );
};

export default Favoritos;

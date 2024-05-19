import React from 'react';

const Favoritos = ({ favoritos, className, toggleVisible, addToMainList }) => {
  const handleClick = (pokemon) => {
    addToMainList(pokemon); // Llama a la función para agregar el Pokémon a la lista principal
  };

  return (
    <aside className={`favoritos ${className}`}>
      <h2>Pokémon Favoritos</h2>
      <div className="favoritos-lista">
        {favoritos.length === 0 ? (
          <p>No hay Pokémon favoritos</p>
        ) : (
          favoritos.map((pokemon) => (
            <div key={pokemon.number} className="favorito-item" onClick={() => handleClick(pokemon)}> {/* Agrega el evento onClick */}
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

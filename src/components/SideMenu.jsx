import React from 'react';

const SideMenu = ({ onShowFavoritos, onRandomPokemon, onSearchById }) => {
  return (
    <div className="side-menu">
      <button className="btn btn-info" onClick={onShowFavoritos}>
        Mostrar Favoritos
      </button>
      <button className="btn btn-primary" onClick={onRandomPokemon}>
        Obtener Pokémon Aleatorio
      </button>
      <button className="btn btn-secondary" onClick={onSearchById}>
        Buscar por ID
      </button>
    </div>
  );
};

export default SideMenu;

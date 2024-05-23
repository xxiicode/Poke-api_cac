import React, { useState } from 'react';

const Buscador = ({ onSearch }) => {
  const [pokeName, setPokeName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(pokeName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='lupa'
        type="text"
        value={pokeName}
        onChange={(e) => setPokeName(e.target.value.toLowerCase())}
        placeholder="Buscar Pokémon"
      />
      <div className='lupa-1'><button class="btn btn-primary" type="submit">🔍 Buscar </button></div>
    </form>
  );
};

export default Buscador;




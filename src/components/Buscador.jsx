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
        type="text"
        value={pokeName}
        onChange={(e) => setPokeName(e.target.value.toLowerCase())}
        placeholder="Buscar Pokémon"
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default Buscador;

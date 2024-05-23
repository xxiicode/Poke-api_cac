import { useState, useEffect } from "react";
import Axios from "axios";
import Buscador from '../components/Buscador';
import Pokedex from '../components/Pokedex';
import Favoritos from '../components/Favoritos';


export const Landing = () => {
  const [pokeFail, setPokeFail] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [showFavoritos, setShowFavoritos] = useState(false);


  const [favoritos, setFavoritos] = useState(() => {
    const saveFavoritos = localStorage.getItem('favoritos');
    return saveFavoritos ? JSON.parse(saveFavoritos) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  const searchPokemon = (query) => {
    let url = "";
    if (!isNaN(query)) { 
      url = `https://pokeapi.co/api/v2/pokemon/${query}`;
    } else {
      url = `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`;
    }
    Axios.get(url).then(
      (response) => {
        if (response.data) {
          const newPokemon = {
            name: response.data.name,
            number: response.data.id,
            species: response.data.species.name,
            img: response.data.sprites.front_default,
            hp: response.data.stats[0].base_stat,
            attack: response.data.stats[1].base_stat,
            defense: response.data.stats[2].base_stat,
            type: response.data.types[0].type.name,
          };
          setPokemons((prevPokemons) => {
            // Verifica si el Pokémon ya está en la lista
            const index = prevPokemons.findIndex(poke => poke.number === newPokemon.number);
            
            if (index !== -1) {
              // Si ya está en la lista, remuévelo de su posición actual
              const updatedPokemons = [...prevPokemons];
              updatedPokemons.splice(index, 1);
              // Agrégalo al principio de la lista
              return [newPokemon, ...updatedPokemons];
            } else {
              // Si no está en la lista, agrégalo al principio
              return [newPokemon, ...prevPokemons];
            }
          });
          setPokeFail(false);
        } else {
          setPokeFail(true);
        }
      }
    ).catch(() => {
      setPokeFail(true);
    });
  };

  const addToMainList = (pokemon) => {
    setPokemons((prevPokemons) => {
      const index = prevPokemons.findIndex(poke => poke.number === pokemon.number);
      if (index !== -1) {
        const updatedPokemons = [...prevPokemons];
        updatedPokemons.splice(index, 1);
        return [pokemon, ...updatedPokemons];
      } else {
        return [pokemon, ...prevPokemons];
      }
    });
  };

  const toggleFavorito = (pokemon) => {
    setFavoritos((prevFavoritos) => {
      if (prevFavoritos.some((fav) => fav.number === pokemon.number)) {
        return prevFavoritos.filter((fav) => fav.number !== pokemon.number);
      } else {
        return [...prevFavoritos, pokemon];
      }
    });
  };

  const toggleVisible = () => {
    setShowFavoritos(!showFavoritos);
  };

 
  const getRandomPokemon = () => {
    const randomId = Math.floor(Math.random() * 1000) + 1; // Genera un ID aleatorio entre 1 y 1000
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`).then(
      (response) => {
        if (response.data) {
          const newPokemon = {
            name: response.data.name,
            number: response.data.id,
            species: response.data.species.name,
            img: response.data.sprites.front_default,
            hp: response.data.stats[0].base_stat,
            attack: response.data.stats[1].base_stat,
            defense: response.data.stats[2].base_stat,
            type: response.data.types[0].type.name,
          };
          setPokemons([newPokemon, ...pokemons]);
          setPokeFail(false);
        } else {
          setPokeFail(true);
        }
      }
    ).catch(() => {
      setPokeFail(true);
    });
  };

  return (
    <div>
      <div className="app container">
        <header>
          <h1 className="title">La poke Api</h1>
          <Buscador onSearch={searchPokemon} />
          <button id="button-favs" className="btn btn-info" onClick={toggleVisible}>
            {showFavoritos ? 'Ocultar Favoritos' : 'Mostrar Favoritos'}
          </button>
          <button className="btn btn-primary" onClick={getRandomPokemon}>🔮 Obtener Pokémon Aleatorio 🔮</button> {/* Nuevo botón para obtener un Pokémon aleatorio */}
        </header>
        <main>
          {/* Lista de Pokémon */}
          {pokemons.length === 0 ? (
            <h2 className="please">🧙‍♂️ Aquí aparecerá tu Pokemón ✨</h2>
          ) : (
            pokemons.map((pokemon) => (
              <Pokedex
                key={pokemon.number}
                pokemon={pokemon}
                pokeFail={pokeFail}
                toggleFavorito={toggleFavorito}
                isFavorito={favoritos.some((fav) => fav.number === pokemon.number)}
              />
            ))
          )}
        </main>
      </div>
      {/* Componente Favoritos */}
      <Favoritos favoritos={favoritos} className={showFavoritos ? 'visible' : ''} toggleVisible={toggleVisible} addToMainList={addToMainList} />
    </div>
  );
};

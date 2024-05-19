import { useState, useEffect } from "react"
import Axios from "axios"
import Buscador from '../components/Buscador'
import Pokedex from '../components/Pokedex'
import Favoritos from '../components/Favoritos';

export const Landing = () => {
  const [pokeChosen, setPokeChosen] = useState(false);
  const [pokeFail, setPokeFail] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    number: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });

  const [showFavoritos, setShowFavoritos] = useState(false);


  const [favoritos, setFavoritos] = useState(() => {
    const saveFavoritos = localStorage.getItem('favoritos');
    return saveFavoritos ? JSON.parse(saveFavoritos) : [];
  });


  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);



  const searchPokemon = (pokeName) => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`).then(
      (response) => {
        if (response.data) {
          setPokemon({
            name: response.data.name,
            number: response.data.id,
            species: response.data.species.name,
            img: response.data.sprites.front_default,
            hp: response.data.stats[0].base_stat,
            attack: response.data.stats[1].base_stat,
            defense: response.data.stats[2].base_stat,
            type: response.data.types[0].type.name,
          });
          setPokeChosen(true);
          setPokeFail(false);
        } else {
          setPokeChosen(false);
          setPokeFail(true);
        }
      }
    ).catch(() => {
      setPokeChosen(false);
      setPokeFail(true);
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

  return (
    <div>
      <div className="app container">
        <header>
          <h1 className="title">La poke Api</h1>
          <Buscador onSearch={searchPokemon} />
          <button class="btn btn-info" onClick={toggleVisible}>
            {showFavoritos ? 'Ocultar Favoritos' : 'Mostrar Favoritos'}
          </button>
        </header>
        <main>
          <Pokedex pokemon={pokemon} pokeChosen={pokeChosen} pokeFail={pokeFail} toggleFavorito={toggleFavorito} favoritos={favoritos} />
        </main>
      </div>
      <Favoritos favoritos={favoritos} className={showFavoritos ? 'visible' : ''} toggleVisible={toggleVisible} />
    </div>
  );
};

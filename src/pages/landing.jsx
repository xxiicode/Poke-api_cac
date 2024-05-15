import { useState } from "react"
import Axios from "axios"
import Buscador from '../components/Buscador'
import Pokedex from '../components/Pokedex'

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

  return (
    <div className="app">
      <header>
        <p>yxcvbnmlkjh098765dtg2clik</p>
        <h1 className="title">La poke Api</h1>
        <Buscador onSearch={searchPokemon} />
      </header>
      <main>
        <Pokedex pokemon={pokemon} pokeChosen={pokeChosen} pokeFail={pokeFail} />
      </main>
      <footer>
        <p>qwetzuiopasdfghjkl23456789</p>
      </footer>
    </div>
  );
};

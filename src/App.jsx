import { useState } from "react"
import Axios from "axios"

export const App = () => {
  const [pokeName, setPokeName] = useState("");
  const [pokeChosen, setPokeChosen] = useState(false)
  const [pokeFail, setPokeFail] = useState(false)
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
  const typeEmojis = {
    "normal": "🟠",
    "fire": "🔥",
    "water": "💧",
    "grass": "🌱",
    "electric": "⚡",
    "ice": "❄️",
    "fighting": "🥊",
    "poison": "☠️",
    "ground": "🏜️",
    "flying": "🕊️",
    "psychic": "🔮",
    "bug": "🐞",
    "rock": "🪨",
    "ghost": "👻",
    "dragon": "🐉",
    "dark": "🌑",
    "steel": "⚙️",
    "fairy": "🧚"
  };


  const searchPokemon = () => {
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
          // Si no se encuentra ningún resultado, mostrar mensaje correspondiente
          setPokeChosen(false);
          setPokeFail(true); // Establecer pokeFail en verdadero
        }
      }
    ).catch(() => {
      // Manejar errores de la petición
      setPokeChosen(false);
      setPokeFail(true); // Establecer pokeFail en verdadero en caso de error
    });
  };


  return (

    <div className="app">
      <header>
      <p>yxcvbnmlkjh098765dtg2clik</p>
        <h1 className="title">La poke Api</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          searchPokemon();
        }}>
          <input
            type="text"
            onChange={(event) => {
              const lowercaseValue = event.target.value.toLowerCase();
              setPokeName(lowercaseValue);
            }}
          />
          <button type="submit">Busca un Pokemon</button>
        </form>
      </header>
      <main>
        <section className="pokedex">
          {!pokeFail ? (<h3></h3>) : (<h3 className="fail">No hay resultados</h3>)}
          {!pokeChosen ? (
            <h2 className="please">Elegi un Pokemon</h2>
          ) : (
            <>
              <div className="nombre">
                <small>Nombre</small>
                <h2>{pokemon.name}</h2>

              </div>
              <div className="imagen">
                <img src={pokemon.img} />
                <h3 className="num">No. {pokemon.number}</h3>
              </div>
              <div className="stats">
                <small>HP</small>
                <small>Ataque</small>
                <small>Defensa</small>
                <h3>{pokemon.hp}</h3>

                <h3>{pokemon.attack}</h3>

                <h3>{pokemon.defense}</h3>

              </div>
              <div className="type">
                <small>Tipo</small>
                <h3>
                  {pokemon.type}{typeEmojis[pokemon.type]}
                </h3>

              </div>
            </>
          )}
        </section>
      </main>
      <footer>
        <p>qwertzuiopasdfghjkl23456789</p>
      </footer>
    </div>
  )
}

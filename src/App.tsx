import "./App.css";
import PokemonCard from "./components/PokemonCard.tsx";
import { useState } from "react";

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];



function App() {
  const [count, setCount] = useState(0);

  const handleClickPlus = () => {
    if (count < pokemonList.length -1) {
    setCount(count + 1);
    }
  };
  const handleClickMinus = () => {
    if (count > 0) {
    setCount(count - 1);
    }
  };

  return (
    <section>
      <PokemonCard pokemon={pokemonList[count]} />
      <p>{count}</p>
      <button type="button"onClick={handleClickMinus}>Précédent</button>
      <button type="button"onClick={handleClickPlus}>Suivant</button>
    </section>
  );
}


export default App;
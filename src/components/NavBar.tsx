import PokemonCard from './PokemonCard';

interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

const NavBar: React.FC<NavBarProps> = ({ pokemonIndex, setPokemonIndex, pokemonList }) => {
  const handlePokemonSelect = (index: number) => {
    setPokemonIndex(index);
    if (pokemonList[index].name === "pikachu") {
      alert("pika pikachu !!!");
    }
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />

      {pokemonList.map((pokemon, index) => (
        <button
          key={pokemon.name}
          type="button"
          onClick={() => handlePokemonSelect(index)} 
        >
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} {}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
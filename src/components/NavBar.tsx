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
  const handlePrevious = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  const handleNext = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />

      {pokemonIndex > 0 && (
        <button type="button" onClick={handlePrevious}>Précédent</button>
      )}

      {pokemonIndex < pokemonList.length - 1 && (
        <button type="button" onClick={handleNext}>Suivant</button>
      )}
    </div>
  );
};

export default NavBar;
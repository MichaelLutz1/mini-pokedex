import React, { useState, useEffect } from "react";
import SearchBar from "./Searchbar";
import BasicInfo from "./BasicInfo";

function Pokemon() {
  const [pokemonName, setPokemonName] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("invisible");
  useEffect(() => {
    async function fetchPokemon(name) {
      try {
        setIsLoading(true);
        const pokemonResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const pokemon = await pokemonResponse.json();
        setPokemonData(pokemon);
        setPokemonName(pokemon.name);
        console.log(pokemon);
        setIsLoading(false);
      } catch {
        setError("visible");
        setIsLoading(false);
        setTimeout(() => {
          setError("invisible");
        }, 3000);
      }
    }
    fetchPokemon(pokemonName);
  }, [pokemonName]);
  return (
    <div className="container-lg">
      <SearchBar
        isLoading={isLoading}
        setPokemonName={setPokemonName}
        error={error}
      />
      {isLoading ? null : (
        <div>
          <BasicInfo pokemonData={pokemonData} />
        </div>
      )}
    </div>
  );
}

export default Pokemon;

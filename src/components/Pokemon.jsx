import React, { useState, useEffect } from "react";
import SearchBar from "./Searchbar";
import BasicInfo from "./BasicInfo";
import Image from "./Image";

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
        }, 2500);
      }
    }
    fetchPokemon(pokemonName);
  }, [pokemonName]);
  return (
    <div className="container w-75 h-100 m-auto">
      <SearchBar
        isLoading={isLoading}
        setPokemonName={setPokemonName}
        error={error}
      />
      <div className="row align-items-center bg-danger rounded-5 h-75 p-4">
        {isLoading ? null : !pokemonData ? null : (
          <>
            <Image pokemonData={pokemonData} />
            <BasicInfo pokemonData={pokemonData} />
          </>
        )}
      </div>
    </div>
  );
}

export default Pokemon;

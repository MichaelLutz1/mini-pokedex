import React, { useState, useEffect } from "react";
import SearchBar from "./Searchbar";

function PokemonInfo() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("invisible");
  useEffect(() => {
    async function fetchPokemon(pokemonName) {
      try {
        setIsLoading(true);
        const pokemonResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        const pokemon = await pokemonResponse.json();
        console.log(pokemon);
        setPokemonData(pokemon);
        setPokemonName(pokemon.name);
        setIsLoading(false);
      } catch {
        setError("visible");
        setIsLoading(false);
        setPokemonName("");
        setTimeout(() => {
          setError("invisible");
        }, 3000);
      }
    }
    pokemonName === "" ? fetchPokemon("pikachu") : fetchPokemon(pokemonName);
  }, [pokemonName]);
  return (
    <>
      <SearchBar setPokemonName={setPokemonName} error={error} />
      <div>{pokemonName}</div>
      <pre>{JSON.stringify(pokemonData, null, 2)}</pre>
    </>
  );
}

export default PokemonInfo;

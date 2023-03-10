import React, { useState, useEffect } from "react";
import SearchBar from "./Searchbar";
import Info from "./Info";
import Image from "./Image";

function Pokemon() {
  const [pokemonName, setPokemonName] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState(null);
  const [imgType, setImgType] = useState("male");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("invisible");

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

  useEffect(() => {
    fetchPokemon(pokemonName);
  }, [pokemonName]);

  return (
    <div className="container w-100 h-100 mx-2">
      <SearchBar
        isLoading={isLoading}
        setPokemonName={setPokemonName}
        error={error}
      />
      <div className="row shadow align-items-center justify-content-center bg-danger rounded-5 h-75 p-0 p-md-4">
        {!pokemonData ? null : (
          <>
            <Image imgType={imgType} pokemonData={pokemonData} />
            <Info setImgType={setImgType} pokemonData={pokemonData} />
          </>
        )}
      </div>
    </div>
  );
}

export default Pokemon;

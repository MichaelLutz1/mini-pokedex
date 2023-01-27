import React, { useState } from "react";
import SearchBar from "./Searchbar";

function PokemonInfo() {
  const [pokemonName, setPokemonName] = useState("");
  return (
    <>
      <SearchBar setPokemonName={setPokemonName} />
      <div>{pokemonName}</div>
    </>
  );
}

export default PokemonInfo;

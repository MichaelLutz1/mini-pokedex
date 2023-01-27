import React from "react";
import { useForm } from "react-hook-form";
function SearchBar(props) {
  const { register, handleSubmit } = useForm();
  function onSubmit(input) {
    props.setPokemonName(input.pokemon);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Enter a pokemon:{" "}
          <input {...register("pokemon", { required: true })} type="search" />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}

export default SearchBar;

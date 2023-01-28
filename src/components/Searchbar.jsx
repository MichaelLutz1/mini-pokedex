import React from "react";
import { useForm } from "react-hook-form";
function SearchBar(props) {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (input) => {
    props.setPokemonName(input.pokemon);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("pokemon", { required: true })}
          autoComplete="off"
          placeholder="Enter a Pokemon"
        />
        <input type="submit" />
      </form>
      {props.isLoading ? <div>loading...</div> : null}
      <div className={props.error}>error: pokemon does not exist</div>
    </div>
  );
}

export default SearchBar;

import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function SearchBar(props) {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (input) => {
    props.setPokemonName(input.pokemon);
    reset();
  };
  return (
    <div className="d-flex flex-column mt-4">
      <form
        className="d-flex justify-content-center border-success align-items-center gap-1"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="input-group w-25 shadow">
          <input
            {...register("pokemon", { required: true })}
            autoComplete="off"
            type="text"
            placeholder="Enter a Pokemon..."
            className=" form-control py-3 fs-5"
          />
          {props.isLoading ? (
            <div className="input-group-text">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <button className="input-group-text px-3">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                onClick={handleSubmit(onSubmit)}
              />
            </button>
          )}
        </div>
      </form>
      <div className="d-flex justify-content-center">
        <div className={props.error}>
          <div className="alert alert-warning align-self-center m-auto p-2 mb-1">
            invalid Pokemon
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

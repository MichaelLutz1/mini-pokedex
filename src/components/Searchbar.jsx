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
    <div className="container mt-4">
      <div className="row justify-content-center">
        <form
          className="col-lg-5 col-xl-4 col-md-6 col-sm-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="input-group shadow p-0">
            <input
              {...register("pokemon", { required: true })}
              autoComplete="off"
              type="text"
              placeholder="Enter a Pokemon name or ID..."
              className=" form-control py-3"
            />
            {props.isLoading ? (
              <div className="input-group-text">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <button className="input-group-text">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  onClick={handleSubmit(onSubmit)}
                />
              </button>
            )}
          </div>
        </form>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-10">
          <div className={props.error}>
            <div className="alert alert-warning align-self-center m-auto p-2 mb-1">
              <div>Invalid Pokemon</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

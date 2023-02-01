import React from "react";
import Header from "./Header";
import "./Info.css";
import Specifics from "./Specifics";

function Info(props) {
  return (
    <div className="col-xl p-0 p-md-3 container h-100 align-self-start overflow-hidden">
      <Header pokemonData={props.pokemonData} />
      <Specifics pokemonData={props.pokemonData} />
    </div>
  );
}

export default Info;

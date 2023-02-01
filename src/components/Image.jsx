import React from "react";
import "./Image.css";

function Image(props) {
  const data = props.pokemonData;
  return (
    <img
      src={data.sprites.front_default}
      alt="pokemon sprite"
      className="img-fluid col-10 col-sm-7 col-md-5 image-rendering"
    />
  );
}

export default Image;

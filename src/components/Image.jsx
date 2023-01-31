import React from "react";
import "./Image.css";

function Image(props) {
  const data = props.pokemonData;
  return (
    <img
      src={data.sprites.front_default}
      alt="sprite of current pokemon"
      className="img-fluid col-6 col-md-5 image-rendering"
    />
  );
}

export default Image;

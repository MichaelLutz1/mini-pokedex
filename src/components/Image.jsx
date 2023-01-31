import React from "react";
import "./Image.css";

function Image(props) {
  const data = props.pokemonData;
  console.log(data.sprites.versions["generation-viii"].icons.front_default);
  return (
    <img
      src={data.sprites.front_default}
      alt="sprite of current pokemon"
      className="img-fluid col image-rendering"
    />
  );
}

export default Image;

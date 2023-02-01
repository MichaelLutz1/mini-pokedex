import React from "react";
import "./Image.css";

function Image(props) {
  const data = props.pokemonData;
  function handleSrc(type) {
    if (type === "female" && data.sprites.front_female) {
      return data.sprites.front_female;
    } else if (type === "shiny" && data.sprites.front_shiny) {
      return data.sprites.front_shiny;
    }
    return data.sprites.front_default;
  }
  return (
    <img
      src={handleSrc(props.imgType)}
      alt="pokemon sprite"
      className="img-fluid col-10 col-sm-7 col-md-5 image-rendering"
    />
  );
}

export default Image;

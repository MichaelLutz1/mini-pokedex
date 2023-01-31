import React from "react";

function Header(props) {
  const data = props.pokemonData;
  function capitalize(w) {
    return w.charAt(0).toUpperCase() + w.slice(1);
  }
  return (
    <div className="row mx-2 align-items-center bg-warning white rounded shadow">
      <img
        src={data.sprites.versions["generation-vii"].icons.front_default}
        alt="sprite of current pokemon"
        className="img-fluid col-auto col-md-2"
      />
      <div className="col-auto fs-6 text-start ps-0">#{data.id}</div>

      <div className="fs-1 col bg-dark ps-3 py-1 py-md-2 h-100 text-start rounded">
        {capitalize(data.name)}
      </div>
    </div>
  );
}

export default Header;

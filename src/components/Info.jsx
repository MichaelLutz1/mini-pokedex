import React from "react";
import "./Info.css";

function Info(props) {
  const data = props.pokemonData;
  let nextKey = 0;
  function capitalize(w) {
    return w.charAt(0).toUpperCase() + w.slice(1);
  }
  return (
    <div className="col-xl container align-self-start bg-white rounded">
      <div className="row m-4 align-items-center bg-warning white rounded shadow">
        <img
          src={data.sprites.versions["generation-vii"].icons.front_default}
          alt="sprite of current pokemon"
          className="img-fluid col-auto col-md-2"
        />
        <div className="col-auto fs-5 text-start">#{data.id}</div>

        <div className="fs-1 fs-md-2 col bg-dark py-1 py-md-2 h-100 text-start rounded-end">
          {capitalize(data.name)}
        </div>
      </div>
      <div className="row">
        {data.types.map((type) => {
          nextKey++;
          return (
            <div className="col-3 m-4 rounded-pill " key={nextKey}>
              <div className={type.type.name}>{capitalize(type.type.name)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Info;

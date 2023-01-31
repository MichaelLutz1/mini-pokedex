import React from "react";
import "./BasicInfo.css";

function BasicInfo(props) {
  const data = props.pokemonData;
  let nextKey = 0;
  function capitalize(w) {
    return w.charAt(0).toUpperCase() + w.slice(1);
  }
  return (
    <div className="col-7 h-100 container bg-white rounded">
      <div className="row m-4 align-items-center bg-warning white rounded shadow">
        <img
          src={data.sprites.versions["generation-vii"].icons.front_default}
          alt="sprite of current pokemon"
          className="img-fluid col"
        />
        <div className="col-2 fs-5 text-start">#{data.id}</div>

        <div className="fs-2 col-8 bg-dark text-start rounded-end p-1 ps-2">
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

export default BasicInfo;

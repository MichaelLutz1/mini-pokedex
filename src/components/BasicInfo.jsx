import React from "react";

function BasicInfo(props) {
  const data = props.pokemonData;
  let nextKey = 0;
  function capitalize(w) {
    return w.charAt(0).toUpperCase() + w.slice(1);
  }
  return (
    <div>
      <div className="fs-2">{capitalize(data.name)}</div>
      <div>#{data.id}</div>
      <img src={data.sprites.front_default} alt="sprite of current pokemon" />
      <div className="d-flex justify-content-center">
        {data.types.map((type) => {
          nextKey++;
          return (
            <div
              className="px-3 py-1 m-2 bg-secondary rounded-pill"
              key={nextKey}
            >
              {capitalize(type.type.name)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BasicInfo;

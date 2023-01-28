import React from "react";

function BasicInfo(props) {
  const data = props.pokemonData;
  return (
    <div>
      <img src={data.sprites.front_default} alt="sprite of current pokemon" />
      <div>
        {/* {data.types.map((type) => {
          <div>{type.type.name}</div>;
        })} */}
      </div>
      <div>{data.name}</div>
    </div>
  );
}

export default BasicInfo;

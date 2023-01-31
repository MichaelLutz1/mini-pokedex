import React from "react";

function Specifics(props) {
  let nextKey = 0;
  const data = props.pokemonData;
  function capitalize(w) {
    return w.charAt(0).toUpperCase() + w.slice(1);
  }
  function calcWeight(weight) {
    return Math.round(weight / 4.536);
  }
  return (
    <div className="container-fluid mt-4">
      <div className="row border border-dark align-items-center mx-3 bg-light">
        <div className="col-3 border-end border-dark py-2">Type</div>
        <div className="row col justify-content-start">
          {data.types.map((type) => {
            nextKey++;
            return (
              <div
                className="rounded-pill text-center col-auto col-lg-3 col-xl-4 col-xxl-4 pe-0"
                key={nextKey}
              >
                <div className={type.type.name}>
                  {capitalize(type.type.name)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="row border border-dark border-top-0 align-items-center mx-3 bg-light">
        <div className="col-3 py-2 border-end border-dark">Height</div>
        <div className="col text-start">{data.height * 10} cm</div>
      </div>
      <div className="row border border-dark border-top-0 align-items-center mx-3 bg-light">
        <div className="col-3 py-2 border-end border-dark">Weight</div>
        <div className="col text-start">{calcWeight(data.weight)} lbs</div>
      </div>
    </div>
  );
}

export default Specifics;

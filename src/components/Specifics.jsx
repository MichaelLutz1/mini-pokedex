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
  function convertSpecial(stat) {
    if (stat.substring(0, 9) === "special-a") {
      return "Sp. Atk";
    }
    if (stat.substring(0, 9) === "special-d") {
      return "Sp. Def";
    }
    return capitalize(stat);
  }
  return (
    <div className="mt-2 mt-md-4 mt-xl-5 p-0 w-100 fw-semibold">
      <div className="row px-0 border border-secondary align-items-center mx-3 bg-white">
        <div className="col-md-3 col-4 border-end border-secondary py-2 bg-success">
          Type
        </div>
        <div className="row col justify-content-start">
          {data.types.map((type) => {
            nextKey++;
            return (
              <div
                className="rounded-pill text-center col-auto col-xl-4 col-xxl-4 pe-0"
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
      <div className="row px-0 border border-secondary border-top-0 align-items-center mx-3 bg-white">
        <div className="col-md-3 col-4 py-2 border-end border-secondary bg-success">
          Height
        </div>
        <div className="col text-start">{data.height * 10} cm</div>
      </div>
      <div className="row px-0 border border-secondary border-top-0 align-items-center mx-3 bg-white">
        <div className="col-md-3 col-4 py-2 border-end border-secondary bg-success">
          Weight
        </div>
        <div className="col text-start">{calcWeight(data.weight)} lbs</div>
      </div>
      <div className="row px-0 border border-secondary border-top-0 align-items-center mx-3 bg-white">
        <div className="col-md-3 col-4 py-2 border-end border-secondary bg-success">
          Abilities
        </div>
        <div className="col row">
          {data.abilities.map((ab) => {
            nextKey++;
            return (
              <div className="col-auto col-md-4 text-start" key={nextKey}>
                {capitalize(ab.ability.name)}
              </div>
            );
          })}
        </div>
      </div>
      <div className="row px-0 border border-top-0 border-secondary mx-3 bg-white align-items-center">
        <div className="py-4 py-md-3 col-md-3 col-4 border-end bg-success border-secondary">
          <div>Base Stats</div>
        </div>
        <div className="row col justify-content-around">
          {data.stats.map((st) => {
            nextKey++;
            return (
              <div
                className="col-md-4 col-6 text-start"
                style={{ fontSize: "14px" }}
                key={nextKey}
              >
                {convertSpecial(st.stat.name)}: {st.base_stat}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Specifics;

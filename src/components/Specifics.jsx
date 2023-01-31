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
    <div className="container-fluid mt-4 p-0">
      <div className="row border border-dark align-items-center mx-3 bg-light">
        <div className="col-3 border-end border-dark py-2 bg-secondary">
          Type
        </div>
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
        <div className="col-3 py-2 border-end border-dark bg-secondary">
          Height
        </div>
        <div className="col text-start">{data.height * 10} cm</div>
      </div>
      <div className="row border border-dark border-top-0 align-items-center mx-3 bg-light">
        <div className="col-3 py-2 border-end border-dark bg-secondary">
          Weight
        </div>
        <div className="col text-start">{calcWeight(data.weight)} lbs</div>
      </div>
      <div className="row border border-dark border-top-0 align-items-center mx-3 bg-light">
        <div className="col-3 py-2 border-end border-dark bg-secondary">
          Abilities
        </div>
        <div className="col row text-center">
          {data.abilities.map((ab) => {
            nextKey++;
            return (
              <div className="col" key={nextKey}>
                {capitalize(ab.ability.name)}
              </div>
            );
          })}
        </div>
      </div>
      <div className="row mt-1 border border-dark mx-3 bg-light">
        <div className="col-3 py-2 border-end border-dark bg-secondary">
          Base Stats
        </div>
        <div className="row col justify-content-around">
          {data.stats.map((st) => {
            nextKey++;
            return (
              <div className="col-4 text-start fs-6" key={nextKey}>
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

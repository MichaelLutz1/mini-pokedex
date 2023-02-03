import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMars,
  faVenus,
  faStarOfLife,
} from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  const data = props.pokemonData;
  function capitalize(w) {
    return w.charAt(0).toUpperCase() + w.slice(1);
  }
  return (
    <div className="row mx-2 align-items-center bg-dark white rounded shadow">
      <img
        src={data.sprites.versions["generation-vii"].icons.front_default}
        alt="pokemon sprite"
        className="img-fluid col-auto col-md-2"
      />
      <div className="col-auto text-start fs-6 ps-0">#{data.id}</div>

      <div className="fs-2 col ps-3 py-1 py-md-2 h-100 text-start">
        {capitalize(data.name)}
      </div>
      <div className="col">
        <div className="row justify-content-end">
          <div className="col-auto py-2 py-md-2 px-1 text-end">
            <FontAwesomeIcon
              icon={faMars}
              onClick={() => props.setImgType("male")}
              style={{ cursor: "pointer", color: "#033afa" }}
            />
          </div>
          <div className="col-auto py-2 py-md-2 px-1 text-end">
            <FontAwesomeIcon
              icon={faVenus}
              onClick={() => props.setImgType("female")}
              style={{ cursor: "pointer", color: "#e90606" }}
            />
          </div>
          <div className="col-auto py-2 py-md-2 px-1 text-end me-2">
            <FontAwesomeIcon
              icon={faStarOfLife}
              onClick={() => props.setImgType("shiny")}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

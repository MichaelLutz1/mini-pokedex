import React from "react";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <div className="bg-secondary vh-100 vw-100">
      <div className="d-flex justify-content-center text-center bg-secondary vh-auto vw-100">
        <Pokemon />
      </div>
    </div>
  );
}

export default App;

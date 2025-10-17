import React from "react";
import "./App.css";
import imgRestaurante from "./assets/hashtaurante.webp";

function App() {
  return (
    <div className="container">
      <div className="banner">
        <img src={imgRestaurante} alt="Banner do Restaurante" />
      </div>
    </div>
  );
}

export default App;

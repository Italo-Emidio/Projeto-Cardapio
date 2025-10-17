import React from "react";
import "./App.css";
import imgRestaurante from "./assets/hashtaurante.webp";
import Categorias from "./components/Categorias";

function App() {
  return (
    <div className="container">
      <div className="banner">
        <img src={imgRestaurante} alt="Banner do Restaurante" />
      </div>

      <Categorias />
    </div>
  );
}

export default App;

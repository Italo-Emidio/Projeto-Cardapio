import "./App.css";
import imgRestaurante from "./assets/hashtaurante.webp";
import Categorias from "./components/Categorias";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="container">
      <div className="banner">
        <img src={imgRestaurante} alt="Banner do Restaurante" />
      </div>

      <Categorias />

      <Cards />
    </div>
  );
}

export default App;

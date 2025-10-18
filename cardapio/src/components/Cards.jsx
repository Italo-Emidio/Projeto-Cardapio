import Card from "./Card";
import imgBurger from "../assets/pratos/burguer-picanha.jpeg";
import imgFile from "../assets/pratos/enroladinho-mignon.jpeg";

function Cards() {
  return (
    <div className="cards">
      <Card
        titulo="Burguer de Picanha"
        descricao="Burguer de Picanha Angus, Queijo Cheddar, Crisp de Cebola e Geléia de
        Bacon"
        preco="R$ 44,90"
        imagem={imgBurger}
      />

      <Card
        titulo="Enroladinho de Mignon"
        descricao="Finíssimas fatias de filé mignon enroladas no parmesão"
        preco="R$ 64,90"
        imagem={imgFile}
      />
    </div>
  );
}

export default Cards;

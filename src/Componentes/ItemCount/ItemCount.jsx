import { useState } from "react";
import "./ItemCount.css";
const ItemCount = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = useState(inicial);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <div className="contador__container">
        <button className="contador__button" onClick={decrementar}>
          -
        </button>
        <p className="contador__numero">{contador}</p>
        <button className="contador__button" onClick={incrementar}>
          +
        </button>
      </div>
      <div className="contador__container--agregar">
        <button
          className="contador__agregar"
          onClick={() => funcionAgregar(contador)}
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;

import { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import { CarritoContext } from "../../context/CarritoContext";

const ItemDetail = ({ id, nombre, stock, precio, img }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlCarrito } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
  };

  return (
    <div className="contenedor__item">
      <div className="contenedor__infor">
        <h2 className="titulo__item">{nombre} </h2>
        <p className="id__item">ID: {id} </p>
        <p className="stock__item">Stock: {stock} </p>
        <h3 className="precio__item">${precio} </h3>

        {}

        {agregarCantidad > 0 ? (
          <>
            <Link className="cart__link" to="/Cart">
              {" "}
              Terminar compra
            </Link>
            <Link className="cart__link" to="/">
              Seguir mirando
            </Link>
          </>
        ) : (
          <ItemCount
            inicial={1}
            stock={stock}
            funcionAgregar={manejadorCantidad}
          />
        )}
      </div>

      <div className="contenedor__img">
        <img src={img} alt={nombre} className="img__item" />
      </div>
    </div>
  );
};

export default ItemDetail;

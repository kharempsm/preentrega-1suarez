import { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
const ItemDetail = ({ id, nombre, stock, precio, img }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  return (
    <div className="contenedor__item">
      <div className="contenedor__infor">
        <h2 className="titulo__item">{nombre} </h2>
        <p className="id__item">ID: {id} </p>
        <p className="stock__item">Stock: {stock} </p>
        <h3 className="precio__item">${precio} </h3>
        <p className="description__item">
          Descubre la elegacia y comodidad en cada una de nuestras prendas y
          accesorios
        </p>
        <div className="contenedor__tallas">
          <div className="talla__card">
            <span className="talla">S</span>
          </div>
          <div className="talla__card">
            <span className="talla">M</span>
          </div>
          <div className="talla__card">
            <span className="talla">L</span>
          </div>
          <div className="talla__card">
            <span className="talla">XL</span>
          </div>
        </div>
      </div>
      <div className="contenedor__img">
        <img src={img} alt={nombre} className="img__item" />
      </div>
    </div>
  );
};

export default ItemDetail;

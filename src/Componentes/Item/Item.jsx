import React from "react";
import "./Item.css";

import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className="contenedor__producto">
      <div className="card__producto">
        <img src={img} alt={nombre} className="img__producto" />
        <div className="infor__producto">
          <h3 className="nombre__producto">Nombre: {nombre} </h3>
          <p className="id__producto">ID: {id} </p>
          <p className="precio__producto">Precio: {precio} </p>
          <div className="contenedor__link">
            <Link to={`/item/${id}`} className="link__producto">
              {" "}
              Ver Detalles{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

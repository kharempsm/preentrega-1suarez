import "./CartWidget.css";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

const CardWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <div className="contenedor__bolsita">
      <Link to="/cart">
        <img
          className="imgBolsita"
          src="./img/bolsita.png"
          alt="imagen de bolsita"
        />
        {cantidadTotal > 0 && (
          <strong className="numero__contador">{cantidadTotal}</strong>
        )}
      </Link>
    </div>
  );
};

export default CardWidget;

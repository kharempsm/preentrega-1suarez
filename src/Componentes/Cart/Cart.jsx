import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";
import "./Cart.css";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <div className="carrito__container">
        <img className="carrito__img" src="../img/carritovacio.png" alt="" />
        <h2 className="carrito__titulo">Tu carrito de compras esta vacio</h2>
        <Link className="carrito__link" to="/">
          {" "}
          Ir al catálogo{" "}
        </Link>
      </div>
    );
  }
  return (
    <div>
      <div className="container__items">
        <div className="item__items">
          {carrito.map((prod) => (
            <CartItem key={prod.id} {...prod} />
          ))}
        </div>
        <h3 className="container__total"> Total:$ {total} </h3>
      </div>
      <div className="container__links">
        <button className="cart__link" onClick={() => vaciarCarrito()}>
          {" "}
          Vaciar Carrito{" "}
        </button>
        <Link className="cart__link" to="/checkout">
          {" "}
          Finalizar Compra{" "}
        </Link>
      </div>
    </div>
  );
};

export default Cart;

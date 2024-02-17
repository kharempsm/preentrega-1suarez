import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import "./Checkout.css";

const Checkout = () => {
  const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [ordenId, setOrdenId] = useState("");
  const [error, setError] = useState("");

  //funciones para manejar el form

  const manejadorSubmit = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError(
        "Por favor llena todos los campos requeridos para continuar con tu orden"
      );
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Verifica tu email.");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    addDoc(collection(db, "ordenes"), orden)
      .then((docRef) => {
        setOrdenId(docRef.id);
        vaciarCarrito();
        setNombre("");
        setApellido("");
        setTelefono("");
        setEmail("");
        setEmailConfirmacion("");
        Swal.fire({
          title: "¡Tu orden de compra fue generada con éxito!",
          text: `Tu número de orden es: ${docRef.id}`,
          icon: "success",
        });
      })
      .catch((error) => {
        console.log("error al crear la orden de compra", error);
        setError("No se pudo crear la orden de compra");
      });
  };

  return (
    <div>
      <h2>Finalizando la compra</h2>
      <form onSubmit={manejadorSubmit}>
        {carrito.map((producto) => (
          <div key={producto.item.id}>
            <p>
              {producto.item.nombre} x {producto.cantidad}
            </p>
            <p>$ {producto.item.precio}</p>
            <p>Total de la compra: ${total}</p>
            <hr />
          </div>
        ))}

        <div className="form__group">
          <label className="form__label" htmlFor="nombre">
            Nombre
          </label>
          <input
            className="form__input"
            type="text"
            id="nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="apellido">
            Apellido
          </label>
          <input
            className="form__input"
            type="text"
            id="apellido"
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="telefono">
            Teléfono
          </label>
          <input
            className="form__input"
            type="text"
            id="telefono"
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            className="form__input"
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="emailcon">
            Confirmación de email
          </label>
          <input
            className="form__input"
            type="email"
            id="emailcon"
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>

        {error && <p>{error}</p>}

        <button className="form__btn">Finalizar</button>
      </form>
    </div>
  );
};

export default Checkout;

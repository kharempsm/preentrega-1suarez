import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { categoria } = useParams();

  useEffect(() => {
    const funcionProductos = categoria
      ? getProductosPorCategoria
      : getProductos;

    funcionProductos(categoria)
      .then((res) => setProductos(res))
      .catch((error) => console.log(error));
  }, [categoria]);

  return (
    <div>
      <h2> Mis Productos </h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;

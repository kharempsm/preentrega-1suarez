import React from "react";
import NavBar from "./Componentes/NavBar/NavBar";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import "./App.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Te invitamos a explorar nuestra tienda" />
    </div>
  );
};

export default App;

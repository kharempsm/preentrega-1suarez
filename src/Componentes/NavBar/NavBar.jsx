import CardWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <h1 className="header__titulo">Kp Store</h1>
      <nav>
        <ul>
          <li>Hombre.</li>
          <li>Mujer.</li>
          <li>Accesorios.</li>
        </ul>
      </nav>
      <CardWidget />
    </header>
  );
};

export default NavBar;

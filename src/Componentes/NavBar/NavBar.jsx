import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img src="./public/img/logo.jpg" className="header__logo" alt="" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="/categoria/2" className="header__categorias">
              Ropa
            </NavLink>
          </li>

          <li>
            <NavLink to="/categoria/1" className="header__categorias">
              Gorras
            </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/3" className="header__categorias">
              Accesorios
            </NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;

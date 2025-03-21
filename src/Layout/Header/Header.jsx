import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="nav-list">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/cart">Orden</a>
          </li>
        </ul>
      </nav>
      <Link className="user-cart" to="/cart">
        <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
        <span className="cart-count">0</span>
      </Link>
    </header>
  );
}

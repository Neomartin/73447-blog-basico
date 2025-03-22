import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { Link } from "react-router-dom";
import { useOrder } from '../../context/OrderContext';

export default function Header() {

  const { count, toggleCart } = useOrder()

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
      {/* <Link className="user-cart" to="/cart">
        <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
        <span className="cart-count">
          { cart.length }
        </span>
      </Link> */}
      <div className="user-cart" onClick={ () => toggleCart() }>

        <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
        <span className="cart-count">
          { count }
        </span>

      </div>
    </header>
  );
}

import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({user, admin, basket}) => {
  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <Link to="/">
          <h2>Fish Shopping Site</h2>
        </Link>
      </div>

      {/* links */}
      <ul className="navbar__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        {admin ? 
        <li>
          <Link to="admin">
            Admin
          </Link>
        </li> :
        user ? 
        <li>
          <Link to="/profile">
            {/* Icon */}
            Profile
          </Link>
        </li> :
        <li>
          <Link to="/login">
            {/* Icon */}
            Login
          </Link>
        </li>}
        <li>
          <Link to="/cart" className="cart__link">
            <span>
              <i className="fas fa-shopping-cart" id="cart__icon"></i>
              Cart
              <span className="cart__pill">{basket.qty}</span>
            </span>
          </Link>
        </li>
      </ul>

      {/* hamburger menu */}
      <div className="hamburger__menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;

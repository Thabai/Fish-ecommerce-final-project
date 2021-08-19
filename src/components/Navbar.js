import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ click, user, admin, basket }) => {
  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar__logo">
          <h2>Little Swimmers</h2>
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
            Profile
          </Link>
        </li> :
        <li>
          <Link to="/login">
            Login
          </Link>
        </li>}
        <li>
          <Link to="/cart" className="cart__link">
            <span>
              <i className="fas fa-shopping-cart" id="cart__icon"></i>
              Cart
              <span className="cart__pill">{basket.length}</span>
            </span>
          </Link>
        </li>
      </ul>

      {/* hamburger menu */}
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;

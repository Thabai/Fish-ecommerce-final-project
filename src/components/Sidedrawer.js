import "./Sidedrawer.css";
import { Link } from "react-router-dom";

const Sidedrawer = ({ show, click, basket }) => {
  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }
  return (
    <div className={sideDrawerClass.join}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <span>Login</span>
          </Link>
        </li>
        <li>
          <Link to="/products">
            <span>Products</span>
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="sidedrawer__cartbadge">{basket.length}</span>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidedrawer;
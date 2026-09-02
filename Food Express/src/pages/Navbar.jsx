import { Link } from "react-router-dom";
import "./Pages.css";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        <span>🍴</span> Food<span className="logo-dark">Express</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/offers">Offers</Link>
        <Link to="/recommended">Recommended</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="nav-right">
        <Link to="/cartpage"><button className="cart-btn">🛒 Cart</button></Link>

        <button className="order-btn">Order Now</button>
      </div>

    </nav>
  );
}

export default Navbar;
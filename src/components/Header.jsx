import React, { useContext } from "react";
import "@styles/components/Header.css";
import { Link } from "react-router-dom";
import Appcontext from "@context/AppContext";

function Header() {
  const { state } = useContext(Appcontext);
  const { cart } = state;
  return (
    <header className="Header">
      <h1 className="Header-title">
        <Link to="/">Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </header>
  );
}

export default Header;

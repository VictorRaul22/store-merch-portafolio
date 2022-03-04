import React, { useContext } from "react";
import "@styles/components/Checkout.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AppContext from "@context/AppContext";

function Checkout() {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;
  const handleRemvoe = (product) => {
    removeFromCart(product);
  };
  const handleSunTotal = () =>
    cart.reduce((accu, currentValue) => accu + currentValue.price, 0);

  return (
    <>
      <Helmet>
        <title>Lista de pedidos</title>
      </Helmet>
      <div className="Checkout">
        <div className="Checkout-content">
          <h3>Lista de Pedidos:</h3>
          {cart.length > 0 ? (
            <h3>Lista de Pedidos:</h3>
          ) : (
            <h3>Sin pedidos ...</h3>
          )}
          {cart.map((item) => (
            <div className="Checkout-item" key={item.idCart}>
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>{item.price}</span>
              </div>
              <button type="button" onClick={() => handleRemvoe(item)}>
                <i className="fas fa-trash alt" />
              </button>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>{`Precio Total: $ ${handleSunTotal()}`}</h3>
            <Link to="/checkout/information">
              <button type="button">Continuar pedido</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Checkout;

import React, { useContext, lazy, Suspense } from "react";
import "@styles/components/Payment.css";
// import { PayPalButton } from "react-paypal-button-v2";
import AppContext from "@context/AppContext";
import { useNavigate } from "react-router-dom";
import pass from "../pass";

const PayPalButton = lazy(() =>
  import(/* webpackChunkName: "paypalBtn" */ "@components/PaypalButton")
);

function Payment() {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const navigate = useNavigate();
  const paypalOptions = {
    clientId: pass.paypalPaymentClientID,
    intent: "capture",
    currency: "USD",
  };
  const buttonStyles = {
    layout: "vertical",
    shape: "react",
  };

  const handleSunTotal = () =>
    cart.reduce((accu, currentValue) => accu + currentValue.price, 0);
  const handlePaymentSuccess = (data) => {
    if (data.status === "COMPLETED") {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate("/checkout/success");
    }
  };
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <Suspense fallback={<h2>Cargando...</h2>}>
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            handleSunTotal={handleSunTotal}
            handlePaymentSuccess={handlePaymentSuccess}
          />
        </Suspense>
      </div>
    </div>
  );
}

export default Payment;

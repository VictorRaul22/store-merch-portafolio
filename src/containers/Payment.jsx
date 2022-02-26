import React, { useContext } from 'react';
import '@styles/components/Payment.css';
import { PayPalButton } from 'react-paypal-button-v2';
import AppContext from '@context/AppContext';
import { useNavigate } from 'react-router-dom';
import pass from '../pass';

function Payment() {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const navigate = useNavigate();
  const paypalOptions = {
    clientId: pass.paypalPaymentClientID,
    intent: 'capture',
    currency: 'USD',
  };
  const buttonStyles = {
    layout: 'vertical',
    shape: 'react',
  };

  const handleSunTotal = () =>
    cart.reduce((accu, currentValue) => accu + currentValue.price, 0);
  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate('/checkout/success');
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
        <div className="Payment-button">
          <PayPalButton
            options={paypalOptions}
            styles={buttonStyles}
            amount={handleSunTotal()}
            onSuccess={(data) => handlePaymentSuccess(data)}
            // eslint-disable-next-line no-console
            onError={(error) => console.log(error)}
            // eslint-disable-next-line no-console
            onCancel={(data) => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
}

export default Payment;

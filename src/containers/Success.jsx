import React from 'react';
import '@styles/components/Success.css';

function Success() {
  return (
    <div className="Succes">
      <div className="Success-content">
        <h2>Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map">Google Maps</div>
      </div>
    </div>
  );
}

export default Success;
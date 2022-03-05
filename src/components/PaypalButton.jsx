import React from "react";
import { PayPalButton } from "react-paypal-button-v2";

function PaypalButton({
  paypalOptions,
  buttonStyles,
  handleSunTotal,
  handlePaymentSuccess,
}) {
  return (
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
  );
}

export default PaypalButton;

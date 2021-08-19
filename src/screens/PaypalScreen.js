import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"; 

const PaypalScreen = ({basket}) => {
 const itemsPrice = basket.reduce(
   (acc, stock) => acc + stock.qty * stock.price,
   0
 );
 const taxPrice = itemsPrice * 0.14;
 const shippingPrice = itemsPrice > 50 ? 0 : 20;
 const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const initialOptions = {
    "client-id": "test",
    currency: "USD",
    intent: "capture"
  };

return (
  <div className="App">
    <h1>Payment Options</h1>
    {basket.length !== 0 && (
          <>
            <hr></hr>
            <div>
              <div >Items Price</div>
              <div>£{itemsPrice.toFixed(2)}</div>
            </div>
            <div>
              <div>Tax Price</div>
              <div>£{taxPrice.toFixed(2)}</div>
            </div>
            <div>
              <div>Shipping Price</div>
              <div>
                £{shippingPrice.toFixed(2)}
              </div>
            </div>

            <div>
              <div>
                <strong>Total Price</strong>
              </div>
              <div>
                <strong>£{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
          </>)}

          
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons />
    </PayPalScriptProvider>
  </div>
);
}

export default PaypalScreen;
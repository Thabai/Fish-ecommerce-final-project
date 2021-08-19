import React, {useState} from 'react';

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"; 

const PaypalScreen = ({basket}) => {
 const itemsPrice = basket.reduce(
   (acc, stock) => acc + stock.qty * stock.price,
   0
 );
 const taxPrice = Math.floor(itemsPrice * 0.14);
 const shippingPrice = itemsPrice > 50 ? 0 : 20;
 const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const initialOptions = {
    "client-id":
      "ATP8--i_78maKj2gTmjaXfYMzdIBlYI4fs7Pl9ZfTesd6KD1SNcNitlRhi0xjiv23XjR4lk0rLp4gJzl",
    currency: "GBP",
    intent: "capture",
  };
const [amount] = useState(totalPrice);
const onApprove = (data, actions) => {
   return actions.order.capture().then(function (details) {
       document.getElementById("message").innerHTML = `Transaction complete. Thank you for shopping at Little Swimmers. Please check your emails for delivery updates`;
   });
 }

return (
  <div className="App">
    <h1>Payment Options</h1>
    {basket.length !== 0 && (
      <>
        <hr></hr>
        <h3>Basket</h3>
        <div>
          <div>Items Price</div>
          <div>£{itemsPrice.toFixed(2)}</div>
        </div>
        <div>
          <div>Tax Price</div>
          <div>£{taxPrice.toFixed(2)}</div>
        </div>
        <div>
          <div>Shipping Price</div>
          <div>£{shippingPrice.toFixed(2)}</div>
        </div>

        <div>
          <div>
            <strong>Total Price</strong>
          </div>
          <div>
            <strong>£{totalPrice.toFixed(2)}</strong>
          </div>
          <div id="message"></div>
        </div>
        <hr />
      </>
    )}

    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        onApprove={onApprove}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                },
              },
            ],
          });
        }}
      />
    </PayPalScriptProvider>
  </div>
);
}

export default PaypalScreen;
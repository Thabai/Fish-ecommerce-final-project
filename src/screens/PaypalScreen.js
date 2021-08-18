import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"; 

const initialOptions = {
    "client-id": "test",
    currency: "GBP",
    intent: "capture",
    "data-client-token": "abc123xyz==",
};

const PaypalScreen = () => {


return (
<div className="App">
      <h1>Hello PayPal</h1>
      <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons />
        </PayPalScriptProvider>
    </div> 
    )
}

export default PaypalScreen;
import './CartScreen.css';
import {Redirect} from "react-router-dom";
import React from 'react';
import { List } from "../components/CartList";

const CartScreen = ({user, basket, setBasket, prices, setPrices}) => {

    const handleRemove = (itemIndex) => {
    let newArray = [...basket];
    let newArray2 = [...prices];
    newArray.splice(itemIndex, 1);
    newArray2.splice(itemIndex, 1);
    setBasket(newArray);
    setPrices(newArray2);
  };

          

   return (
      <div className="container">
        <div className="cartscreen">
            Cart Screen

        </div>
        <div className="wrapper">
          {basket.length > 0 && (
            <List items={basket} prices={prices} handleRemove={handleRemove} />
          )}
        </div>
        { user ? <Redirect to="/cart" /> : <Redirect to="/products" />}
      </div>
  );
};

export default CartScreen;

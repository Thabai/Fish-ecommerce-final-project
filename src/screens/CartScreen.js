import './CartScreen.css';
import {Redirect} from "react-router-dom";
import React from 'react';



const CartScreen = ({user, basket, setBasket}) => {

    const handleRemove = (itemIndex) => {
    let newArray = itemIndex - 1;
    newArray.splice(itemIndex, 1);
    setBasket(newArray);
  };

  const itemsPrice = basket.reduce((acc, stock) => acc + stock.qty * stock.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 50 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <aside className="cart">
      <h2>Cart Items</h2>
      <div>
        {basket.length === 0 && <div>Cart is empty</div>}
        {basket.map((stock) => (
          <div key={stock.id} className="row">
            <div className="col-2">{stock.name}</div>
            <div className="col-2">
              <button onClick={() => handleRemove(stock)} className="remove">
                Delete from Basket
              </button>
              {/* <button onClick={() => handleUpdate(stock)} className="remove">
                -
              </button> */}
              {/* <button onClick={() => setBasket(stock)} className="add">
                +
              </button> */}
            </div>

            <div className="col-2 text-right">
              {stock.qty} x ${stock.price.toFixed(2)}
            </div>
          </div>
        ))}

        {basket.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">£{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">£{taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                £{shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>£{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert("Implement Checkout!")}>
                Checkout
              </button>
            </div>
          </>
        )}
        {user ? <Redirect to="/cart" /> : <Redirect to="/products" />}
      </div>
    </aside>
  );
}

export default CartScreen;

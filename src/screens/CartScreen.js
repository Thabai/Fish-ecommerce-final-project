import "./CartScreen.css";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import React from "react";

const CartScreen = ({ user, basket, setBasket }) => {
  const history = useHistory();
  const navigateTo = () => history.push("/paypal");

  const handleRemove = (stock) => {
    setBasket(basket.filter((item) => item.name !== stock.name));
  };

  const onAdd = (stock) => {
    const exist = basket.find((item) => item.name === stock.name);
    if (exist) {
      setBasket(
        basket.map((item) =>
          item.name === stock.name ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setBasket([...basket, { ...stock, qty: 1 }]);
    }
  };

  const onMinus = (stock) => {
    const exist = basket.find((item) => item.name === stock.name);
    if (exist.qty > 1) {
      setBasket(
        basket.map((item) =>
          item.name === stock.name ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    } else {
      handleRemove(stock);
    }
  };

  const itemsPrice = basket.reduce(
    (acc, stock) => acc + stock.qty * stock.price,
    0
  );
  const taxPrice = Math.floor(itemsPrice * 0.14);
  const shippingPrice = itemsPrice > 50 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <div className="cartscreen">
      <div className="cart__title">
        <h2>Cart Items</h2>
      </div>

      <div className="cart">
        {!user && <Redirect to="/login" />}
        {basket.length === 0 && <div>Cart is empty</div>}
        <div className="cart__items">
          {basket.map((stock) => (
            <div className="cart__item" key={stock.id}>
              <div>
              <p>{stock.name}</p>
              </div>
              <div>
              <button onClick={() => handleRemove(stock)} className="remove">
                Remove from Basket
              </button>
              </div>
              <div className="control__buttons">
                <button onClick={() => onMinus(stock)} className="decrease">
                  -
                </button>
                <button onClick={() => onAdd(stock)} className="increase">
                  +
                </button>
                <div className=""></div>
              </div>

              <div className="col-2 text-right">
                {stock.qty} x £{stock.price.toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        {basket.length !== 0 && (
          <>
            <div className="basket__items">
              <p>Items Price</p>
              £{itemsPrice.toFixed(2)}
              <p>Tax Price</p>
              £{taxPrice.toFixed(2)}
              <p>Shipping Price</p>
              £{shippingPrice.toFixed(2)}
              <strong>Total Price</strong>
              <strong>£{totalPrice.toFixed(2)}</strong>
              <button className="checkout__btn" onClick={navigateTo} type="button">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartScreen;

import './CartScreen.css';
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import React from 'react';



const CartScreen = ({user, admin, basket, setBasket}) => {
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
  
  const onMinus= (stock) => {
    const exist = basket.find((item) => item.name === stock.name);
    if (exist.qty > 1) {
      setBasket(
        basket.map((item) =>
          item.name === stock.name ? { ...exist, qty: exist.qty - 1 } : item
        )
      )
    } else {
      handleRemove(stock);
    }
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
              <button onClick={() => onMinus(stock)} className="remove">
                -
              </button>
              <button onClick={() => onAdd(stock)} className="add">
                +
              </button>
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
              <button onClick={navigateTo} type="button">Checkout</button>
            </div>
          </>
        )}
      </div>
      {!user | !admin ? <Redirect to="/cart" /> : <Redirect to="/login" />}
    </aside>
  );
}

export default CartScreen;

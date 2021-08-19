import "./ProductsScreen.css";
import { useEffect } from "react";
import { findAllFish } from '../utils';
import BoxCard from '../components/BoxCard';

const ProductsScreen = ({stock, setStock, basket, setBasket}) => {

const onAdd = (stock) => {
  const exist = basket.find((item) => item.name === stock.name);
  if (exist) {
    setBasket(
      basket.map((item) =>
        item.name === stock.name ? { ...exist, qty: exist.qty + 1 }: item
      )
    );
  } else {
    setBasket([...basket, { ...stock, qty: 1 }]);
    
  }
  document.getElementById("message").innerHTML =
      "Item Added To Cart";
  setTimeout(function () {
    document.getElementById("message").innerHTML = "";
  }, 1000);
};

  useEffect(() => {
    findAllFish(setStock);
  }, [setStock]);

  return (
    <div className="productsScreen">
      <div className="productsScreen__title">
        <h2>Available Fish</h2>
      </div>
      <div id="message"></div>
      <div className="productsScreen__products">
        <BoxCard stock={stock} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ProductsScreen;

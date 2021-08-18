import './ProductsScreen.css';
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
};


  useEffect(() => {
    findAllFish(setStock);
  }, [setStock]);
  
    return (
      <div className="pageContainerProd">
        <div className='overlayProd'>
        <div className="title">
        <h2>Available Fish</h2>
        </div>
        <div className="main">
          <BoxCard stock={stock} onAdd={onAdd} />
        </div>
      </div></div>
    );
}

export default ProductsScreen;

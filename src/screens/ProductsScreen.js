import './ProductsScreen.css';
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

const ProductsScreen = ({stock, setStock, basket, setBasket, prices, setPrices}) => {
const handleItem = (newItem, newPrices) => {
    setBasket([...basket, newItem]);
    setPrices([...prices, newPrices]);
  };

    return (
      <div className="productsscreen">
        Products Screen
        <button
                      type="button"
                      onClick={() => {
                        handleItem(stock.name, stock.price);
                      }}
                    >
                      Add to cart
                    </button>
        <Link to={`/${stock.id}`}>More Info</Link>
      </div>
    );
}

export default ProductsScreen;

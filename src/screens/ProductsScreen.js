import './ProductsScreen.css';
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import { findAllFish } from '../utils';
import BoxCard from '../components/BoxCard';

const ProductsScreen = ({stock, setStock, basket, setBasket, prices, setPrices}) => {
const handleItem = (newItem, newPrices) => {
    setBasket([...basket, newItem]);
    setPrices([...prices, newPrices]);
  };
  useEffect(() => {
    findAllFish(setStock);
  }, []);
    return (
      <div className="pageContainer">
      <h2>Available Fish</h2>
      <div className="main">
        <BoxCard stock={stock} />
      </div>
    </div>
        // <Link to={`/${stock.id}`}>More Info</Link>
      
    );
}

export default ProductsScreen;

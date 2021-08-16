import React from 'react';
import './stockBox.css';
import handleItem from '../screens/ProductsScreen'
import { Link } from 'react-router-dom'

const StockBox = ({stock, setStock, basket, setBasket, prices, setPrices, data}) => {
  return (
    <div className="stock">
      <li>
      <img src = {data.img} alt=""></img>     
       <p className="cardName">{data.name}</p>
        <p>{data.scientific}</p>
        <p>About: {data.description}</p>
        <p>Water Type: {data.habitat}</p>
        <p className="price">Price: £{data.price}</p>
        <button
                      type="button"
                      onClick={() => {
                        handleItem(stock.name, stock.price);
                      }}
                    >
                      Add to cart
                    </button>
        {/* <Link to={`/${stock.id}`}>More Info</Link> */}
      </li>
    </div>
  );
};
export default StockBox;


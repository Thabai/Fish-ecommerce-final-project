import React from 'react';
import './stockBox.css';
import { Link } from 'react-router-dom'

const StockBox = ({data, onAdd}) => {

  return (
    <div className="stock">
      <li>
        <img src={data.img} alt=""></img>
        <p className="cardName">{data.name}</p>
        <p>{data.scientific}</p>
        <p>About: {data.description}</p>
        <p>Water Type: {data.habitat}</p>
        <p className="price">Price: £{data.price.toFixed(2)}</p>
        <button onClick={() => onAdd(data)}> Add to cart </button>
        <Link to={`/${data.id}`}>More Info</Link>
      </li>
    </div>
  );
};
export default StockBox;


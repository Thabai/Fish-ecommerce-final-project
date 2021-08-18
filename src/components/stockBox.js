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
        <p className='saltFresh'>Water Type: {data.habitat}</p>
        <p className="price">Price: £{data.price.toFixed(2)}</p>
        <button onClick={() => onAdd(data)}> Add to cart </button>
        <div className="more-info">
        <Link to={`/${data.name}`}>More Info</Link>
        </div>
      </li>
    </div>
  );
};
export default StockBox;


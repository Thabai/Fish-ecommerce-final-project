import React from 'react';
import './stockBox.css';

const StockBox = ({data}) => {
  return (
    <div className="stock">
      <li>
      <img src = {data.img} alt=""></img>     
       <p className="cardName">{data.name}</p>
        <p>{data.scientific}</p>
        <p>About: {data.description}</p>
        <p>Water Type: {data.habitat}</p>
        <p className="price">Price: £{data.price}</p>
      </li>
    </div>
  );
};
export default StockBox;


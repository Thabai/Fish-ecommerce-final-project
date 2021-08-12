import React from 'react';
import './stockBox.css';

const StockBox = ({data}) => {
  return (
    <div className="stock">
      <li>
      <img src = {data.img} alt=""></img>     
        <p>{data.name}</p>
        <p>{data.scientific}</p>
        <p>{data.description}</p>
        <p>{data.habitat}</p>
        <h3>{data.price}</h3>
      </li>
    </div>
  );
};
export default StockBox;
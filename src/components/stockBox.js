import React from "react";
import "./stockBox.css";
import { Link } from "react-router-dom";

const StockBox = ({ data, onAdd }) => {
  return (
    <div className="stockBox">
      <img src={data.img} alt="" />

      <div className="stockBox__info">
        <p className="stockBox__name">{data.name}</p>
        <p className="stockBox__description">
          <p>Scientific Name: {data.scientific}</p>
          <p>Water Type: {data.habitat}</p>
        </p>
        <p className="stockBox__price">Price: £{data.price.toFixed(2)}</p>
          <button className="cart__button" onClick={() => onAdd(data)}>Add to cart</button>
        <Link to={`/${data.name}`} className="stockBoxinfo__link">
          More Info
        </Link>
      </div>
    </div>
  );
};

export default StockBox;

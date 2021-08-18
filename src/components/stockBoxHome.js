import React from "react";
import "./stockBoxHome.css";
import { Link } from "react-router-dom";

const StockBoxHome = ({ data }) => {
  return (
    <div className="product">
      <img src={data.img} alt="" />

      <div className="product__info">
        <p className="info__name">{data.name}</p>
        <p className="info__description">
          <p>Scientific name: {data.scientific}</p>
          <p>Water Type: {data.habitat}</p>
        </p>
        <p className="info__price">Price: £{data.price.toFixed(2)}</p>
        <Link to={`/${data.name}`} className="moreinfo__link">
          More Info
        </Link>
      </div>
    </div>
  );
};

export default StockBoxHome;
import StockBox from "./stockBox";
import React from "react";


const BoxCard = ({ stock, onAdd }) => {
  return (
    <div className="cards">
      {stock.map((data, index) => {
        return <StockBox key={index} data={data} onAdd={onAdd} />;
      })}
    </div>
  );
};
export default BoxCard;


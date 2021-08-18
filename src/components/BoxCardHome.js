import StockBoxHome from "../components/stockBoxHome";
import React from "react";

const BoxCardHome = ({ stock }) => {
  return (
    <div className="cards">
      {stock.map((data, index) => {
        return <StockBoxHome key={index} data={data} />;
      })}
    </div>
  );
};
export default BoxCardHome;
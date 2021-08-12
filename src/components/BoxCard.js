import StockBox from "./stockBox";
import React from 'react';
import { useEffect } from "react";

const BoxCard = ({stock}) => {
        return (
            <div>
                {stock.map((data, index) => {
                    return  <StockBox key={index} data={data}/> 
                })}
            </div>
        )
}
export default BoxCard;
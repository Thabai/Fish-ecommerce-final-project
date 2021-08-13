import StockBox from "./stockBox";
import React from 'react';
import { useEffect } from "react";
import './BoxCard.css';

const BoxCard = ({stock}) => {
    console.log(stock)
        return (
            <div>
                {stock.map((data, index) => {
                    return  <StockBox key={index} data={data}/> 
                })}
            </div>
        )
}
export default BoxCard;
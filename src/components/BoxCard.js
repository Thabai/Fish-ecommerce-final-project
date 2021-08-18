import StockBox from "./stockBox";
import React from 'react';
import './BoxCard.css';

const BoxCard = ({stock, onAdd}) => {
        return (
            <div>
            <div className="cards">
                {stock.map((data, index) => {
                    return <StockBox key={index} data={data} onAdd={onAdd} />; 
                })}
            </div> 
         </div>
        )
}
export default BoxCard;
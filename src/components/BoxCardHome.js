import StockBoxHome from '../components/stockBoxHome';
import React from 'react';
import './BoxCardHome.css';

const BoxCardHome = ({stock, onAdd}) => {
        return (
            <div>
                {stock.map((data, index) => {
                    return <StockBoxHome key={index} data={data} onAdd={onAdd} />; 
                })}
            </div>
        )
}
export default BoxCardHome;
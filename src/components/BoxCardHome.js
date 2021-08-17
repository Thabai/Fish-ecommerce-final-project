import StockBoxHome from '../components/stockBoxHome';
import React from 'react';
import './BoxCardHome.css';

const BoxCardHome = ({stock}) => {
        return (
            <div>
                {stock.map((data, index) => {
                    return <StockBoxHome key={index} data={data} />; 
                })}
            </div>
        )
}
export default BoxCardHome;
import './HomeScreen.css'
import React, { useEffect } from "react";
import { findAllFish } from '../utils';
import BoxCardHome from '../components/BoxCardHome';


const HomeScreen = ({ stock, setStock }) => {
  useEffect(() => {
    findAllFish(setStock);
  }, [setStock]);

  return (
    <div className="pageContainer">
      <div className="overlay">
        <div className="title">
          <h2>Home</h2>
        </div>
        {stock.length === 0 && <div>Loading Please Wait</div>}}
        {stock.length > 0 ? (
          <div className="main">
            <BoxCardHome stock={stock} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default HomeScreen;
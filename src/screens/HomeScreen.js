import './HomeScreen.css'
import React, { useEffect } from "react";
import { findAllFish } from '../utils';
import BoxCard from '../components/BoxCard';
import StockBox from '../components/stockBox';

const Home = ({ stock, setStock }) => {
  useEffect(() => {
    findAllFish(setStock);
  }, []);

  return (
    <div className="pageContainer">
      <div>
        <h2>Available Fish</h2>
        </div>
        <div className="main">
        {/* <Card ={stock}/> */}
        <BoxCard stock={stock}/>
    </div></div>
  );
};

export default Home;
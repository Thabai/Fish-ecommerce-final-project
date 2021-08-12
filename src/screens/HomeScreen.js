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
        <h2>Available Fish</h2>
        {/* <Card ={stock}/> */}
        <BoxCard stock={stock}/>
    </div>
  );
};

export default Home;
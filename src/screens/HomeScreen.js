import './HomeScreen.css'
import React, { useEffect } from "react";
import { findAllFish } from '../utils';
import BoxCard from '../components/BoxCard';


const Home = ({ stock, setStock }) => {
  useEffect(() => {
    findAllFish(setStock);
  }, []);

  return (
    <div className="pageContainer">
      <h2>Available Fish</h2>
      <div className="main">
        <BoxCard stock={stock} />
      </div>
    </div>

  );
};

export default Home;
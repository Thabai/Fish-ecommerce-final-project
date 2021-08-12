import './HomeScreen.css'
import React, { useEffect } from "react";
import { findAllFish } from '../utils';

const Home = ({ stock, setStock }) => {
  useEffect(() => {
    findAllFish(setStock);
  }, []);

  return (
    <div className="pageContainer">
        <h2>Available Fish</h2>
        {/* <Card ={stock}/> */}
    </div>
  );
};

export default Home;
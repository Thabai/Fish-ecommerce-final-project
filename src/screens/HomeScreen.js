import './HomeScreen.css'
import React, { useEffect } from "react";
import { findAllFish } from '../utils';
import BoxCardHome from '../components/BoxCardHome';


const Home = ({ stock, setStock }) => {
  useEffect(() => {
    findAllFish(setStock);
  }, []);

  return (
    <div className="pageContainer">
      <h2>Available Fish</h2>
        <BoxCardHome stock={stock} />
    </div>

  );
};

export default Home;
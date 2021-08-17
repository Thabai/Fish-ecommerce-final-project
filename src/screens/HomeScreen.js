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
      <div className="title">
      <h2>Home</h2>
      </div>
      <div className="card-holder">
        <BoxCardHome stock={stock} />
        </div>
    </div>

  );
};

export default Home;
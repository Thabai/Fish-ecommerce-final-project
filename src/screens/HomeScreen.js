import './HomeScreen.css'
import React, { useEffect } from "react";
import { findAllFish } from '../utils';
import BoxCardHome from '../components/BoxCardHome';


const HomeScreen = ({ stock, setStock }) => {
  useEffect(() => {
    findAllFish(setStock);
  }, []);

  return (
    <div className="pageContainer">
      <div className='overlay'>
      <div className='title'>
      <h2>Home</h2>
      </div>
    
      <div className="main">
        <BoxCardHome stock={stock} />
    </div></div></div>

  );
};

export default HomeScreen;
import "./HomeScreen.css";
import React, { useEffect } from "react";
import { findAllFish } from "../utils";
import BoxCardHome from "../components/BoxCardHome";

const HomeScreen = ({ stock, setStock }) => {
  useEffect(() => {
    findAllFish(setStock);
  }, [setStock]);

  return (
    <div className="homescreen">
      <div className="homescreen__title">
          <h2>Home</h2>
        </div>

        <div className="homescreen_products">
          <BoxCardHome stock={stock} />
        </div>
      </div>
  );
};

export default HomeScreen;

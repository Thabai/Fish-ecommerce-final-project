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

      {stock.length === 0 && <div>Loading Please Wait</div>}
      {stock.length > 0 ? (
          <BoxCardHome stock={stock} />
      ) : null}
    </div>
  );
};

export default HomeScreen;

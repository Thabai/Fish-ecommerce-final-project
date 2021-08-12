import React, { useState } from "react";
import { Redirect } from "react-router";

const Admin = ({ admin, setAdmin }) => {


  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("MyToken");
    setAdmin();
  };

  return (
    <div>
      <h3>Admin</h3>

      <h2 className="navText">Log Out</h2>
      <button className="logBtn" type="submit" onClick={logoutHandler}>
        Log Out
      </button>
      {!admin && <Redirect to="/home" />}
    </div>
  );
};

export default Admin;

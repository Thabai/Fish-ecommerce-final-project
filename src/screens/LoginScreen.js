import './LoginScreen.css'
import React, { useState } from "react";
import { fetchUsers } from "../utils";
import { Redirect } from "react-router-dom";

const LoginScreen = ({ user, setUser, admin, setAdmin, setUserFetch }) => {
  const [newUser, setNewUser] = useState(false);
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [postcode, setPostcode] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [pass, setPass] = useState();

  return (
    <div className="pageContainerLogin">
      <div className="overlayLogin">
        <div className="formContainerLogin">
          <div className="header">
            <h2>Welcome</h2>
            <h4 className="subText">Please Log in or Sign up</h4>
          </div>
          <form
            className="logForm"
            onSubmit={(e) =>
              fetchUsers(
                e,
                username,
                email,
                pass,
                name,
                surname,
                street,
                city,
                postcode,
                setUser,
                setAdmin,
                setUserFetch
              )
            }
          >
            {newUser && [
              <input
                className="fnameInput"
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />,

              <input
                className="snameInput"
                onChange={(e) => setSurname(e.target.value)}
                placeholder="Surname"
              />,

              <input
                className="streetInput"
                onChange={(e) => setStreet(e.target.value)}
                placeholder="Street Name"
              />,

              <input
                className="cityInput"
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
              />,

              <input
                className="postcodeInput"
                onChange={(e) => setPostcode(e.target.value)}
                placeholder="Postcode"
              />,

              <input
                className="logInput"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />,
            ]}
            <input
              className="logInput"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <input
              className="logInput"
              onChange={(e) => setPass(e.target.value)}
              placeholder="Password"
              type="password"
            />
            <div className="buttons">
              <button className="logBtn" type="submit">
                {newUser ? "Sign Up" : "Log In"}
              </button>
            </div>
          </form>


          <button
            className="logBtn"
            type="button"
            onClick={() => setNewUser(!newUser)}
          >
            {newUser ? "Log In" : "Sign Up"}
          </button>
          {admin && <Redirect to="/admin" />}
          {user && <Redirect to="/profile" />}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
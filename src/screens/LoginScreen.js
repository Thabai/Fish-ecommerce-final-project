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
    <div className="login">
      <div>
        <p className="login__title">Welcome</p>
        <p className="login__note">Please Log in or Sign up</p>
      </div>
      <form
        className="login__form"
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
        {newUser &&
          (
            [<input
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />,
          
          
            <input
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Surname"
            />,
          
          
            <input
              onChange={(e) => setStreet(e.target.value)}
              placeholder="Street Name"
            />,
          
          
            <input
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
            />,
        
          
            <input
              onChange={(e) => setPostcode(e.target.value)}
              placeholder="Postcode"
            />,
          
          
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />]
          )}
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          onChange={(e) => setPass(e.target.value)}
          placeholder="Password"
          type="password"
        />

        <button className="logBtn" type="submit">
          {newUser ? "Sign Up" : "Log In"}
        </button>
      </form>

      <p className="profile__note">Register now for your free account.</p>

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
  );
};

export default LoginScreen;
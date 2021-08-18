import React, { useState, useEffect } from "react";
import { updateUserDetails, deleteUser } from "../utils";
import { Redirect } from "react-router";
import "./Profile.css";

const Profile = ({ user, setUser, userFetch }) => {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [postcode, setPostcode] = useState();
  const [email, setEmail] = useState();
  const [password, setPass] = useState();

  useEffect(() => {
    try {
      setName(userFetch.user.name);
      setSurname(userFetch.user.surname);
      setStreet(userFetch.user.street);
      setCity(userFetch.user.city);
      setPostcode(userFetch.user.postcode);
      setEmail(userFetch.user.email);
      setPass(userFetch.user.password);
    } catch (error) {
      console.log(error);
    }
  }, [userFetch]);

  console.log(userFetch);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("MyToken");
    setUser();
  };

  return (
    <div className="profile">
      <p className="profile__title">User Settings</p>
      <p className="profile__note">Update profile settings below</p>
      <div id="messageContainer"></div>

      {userFetch ? (
        <form
          className="profile__form"
          onSubmit={(e) =>
            updateUserDetails(
              e,
              email,
              password,
              name,
              surname,
              street,
              city,
              postcode,
              user,
              setUser
            )
          }
        >
          <p className="profile__note">Change First Name</p>
          <p>{name}</p>
          <input onChange={(e) => setName(e.target.value)} />
          <p className="profile__note">Change Surname</p>
          <p>{surname}</p>
          <input onChange={(e) => setSurname(e.target.value)} />
          <p className="profile__note">Change Address</p>
          <p>{street}</p>
          <input onChange={(e) => setStreet(e.target.value)} />
          <p className="profile__note">Change City</p>
          <p>{city}</p>
          <input onChange={(e) => setCity(e.target.value)} />
          <p className="profile__note">Change Postcode</p>
          <p>{postcode}</p>
          <input onChange={(e) => setPostcode(e.target.value)} />
          <p className="profile__note">Change Email</p>
          <p>{email}</p>
          <input onChange={(e) => setEmail(e.target.value)} />
          <p className="profile__note">Change Password</p>
          <p>{password}</p>
          <input type="password" onChange={(e) => setPass(e.target.value)} />
          <button type="submit">Update</button>
        </form>
      ) : null}
      <p className="profile__note">Log out or delete your account below</p>
      <div className="user__controls">
        <button className="logBtn" type="submit" onClick={logoutHandler}>
          Log Out
        </button>

        <button
          className="logBtn"
          type="submit"
          onClick={() => {
            deleteUser(user, setUser);
          }}
        >
          Delete Account
        </button>
        {!user && <Redirect to="/" />}
      </div>
    </div>
  );
};
export default Profile;

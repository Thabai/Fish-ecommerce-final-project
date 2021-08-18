import React, {useState, useEffect} from "react";
import { updateUserDetails, deleteUser} from "../utils";
import { Redirect } from "react-router";

const Profile = ({ user, setUser, userFetch}) => {

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

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("MyToken");
    setUser();
  };

return (
  <div className="pageContainer">
    <h1 className="header">User settings</h1>
    <p className="navText">Update profile settings below</p>
    <div id="message"></div>

    {userFetch ? (
      <form
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
        <h3>Change First Name</h3>
        <p>{name}</p>
        <input onChange={(e) => setName(e.target.value)} />
        <h3>Change Surname</h3>
        <p>{surname}</p>
        <input onChange={(e) => setSurname(e.target.value)} />
        <h3>Change Street</h3>
        <p>{street}</p>
        <input onChange={(e) => setStreet(e.target.value)} />
        <h3>Change City</h3>
        <p>{city}</p>
        <input onChange={(e) => setCity(e.target.value)} />
        <h3>Change Postcode</h3>
        <p>{postcode}</p>
        <input onChange={(e) => setPostcode(e.target.value)} />
        <h3>Change Email</h3>
        <p>{email}</p>
        <input onChange={(e) => setEmail(e.target.value)} />
        <h3>Change Password</h3>
        <p>{password}</p>
        <input type="password" onChange={(e) => setPass(e.target.value)} />
        <button className="logBtn" type="submit">
          Update
        </button>
      </form>
    ) : null}
    <h2 className="navText">Log Out</h2>
    <button className="logBtn" type="submit" onClick={logoutHandler}>
      Log Out
    </button>

    <h2 className="navText">Delete Account</h2>
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
);
    };
export default Profile;


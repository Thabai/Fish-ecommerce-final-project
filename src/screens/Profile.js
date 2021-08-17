import React, {useState} from "react";
import { updateUserDetails, deleteUser } from "../utils";
import { Redirect } from "react-router";

const Profile = ({user, setUser}) => {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [postcode, setPostcode] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();


  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("MyToken");
    setUser();
  };

return (
  <div className="pageContainer">
    <h1 className="header">User settings</h1>
    <p className="navText">
      Update profile settings below
    </p>
    <form
      className="logForm"
      onSubmit={(e) =>
        updateUserDetails(
          e,
          email,
          pass,
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
      <h3>Change Email</h3>
      <input
        className="logInput"
        type="text"
        name="name"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="New Email"
      />
      <button className="logBtn" type="submit">
        Update
      </button>
    </form>
    <form>
      <h3>Change Password</h3>
      <input
        className="logInput"
        type="text"
        name="name"
        onChange={(e) => setPass(e.target.value)}
        placeholder="New Password"
      />
      <button className="logBtn" type="submit">
        Update
      </button>
    </form>
    <form>
      <h3>Change First Name</h3>
      <input
        className="logInput"
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
        placeholder="New Name"
      />
      <button className="logBtn" type="submit">
        Update
      </button>
    </form>
    <form>
      <h3>Change Surname</h3>
      <input
        className="logInput"
        type="text"
        name="name"
        onChange={(e) => setSurname(e.target.value)}
        placeholder="New Surname"
      />
      <button className="logBtn" type="submit">
        Update
      </button>
    </form>
    <form>
      <h3>Change Street</h3>
      <input
        className="logInput"
        type="text"
        name="name"
        onChange={(e) => setStreet(e.target.value)}
        placeholder="New Street"
      />
      <button className="logBtn" type="submit">
        Update
      </button>
    </form>
    <form>
      <h3>Change City</h3>
      <input
        className="logInput"
        type="text"
        name="name"
        onChange={(e) => setCity(e.target.value)}
        placeholder="New City"
      />
      <button className="logBtn" type="submit">
        Update
      </button>
    </form>
    <form>
      <h3>Change Postcode</h3>
      <input
        className="logInput"
        type="text"
        name="name"
        onChange={(e) => setPostcode(e.target.value)}
        placeholder="New Postcode"
      />
      <button className="logBtn" type="submit">
        Update
      </button>
    </form>

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

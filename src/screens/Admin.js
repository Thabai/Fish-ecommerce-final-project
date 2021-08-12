import React, { useState } from "react";
import { createFish, deleteStock } from "../utils";
import { Redirect } from "react-router";

const Admin = ({ admin, setAdmin, stock, setStock }) => {
 const [name, setName] = useState();
 const [scientific, setScientific] = useState();
 const [img, setImg] = useState();
 const [hab, setHab] = useState();
 const [desc, setDesc] = useState();
 const [temperature, setTemperature] = useState();
 const [temperament, setTemperament] = useState();
  const [food, setFood] = useState();
  const [social, setSocial] = useState();
  const [breeding, setBreeding] = useState();
  const [quant, setQuant] = useState();
  const [price, setPrice] = useState();
  const [del, setDel] = useState();


  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("MyToken");
    setAdmin();
  };

  return (
    <div className="pageContainer">
      <h3>Admin</h3>
      <form
        onSubmit={(e) =>
          createFish(
            e,
            name,
            scientific,
            img,
            hab,
            desc,
            temperature,
            temperament,
            food,
            social,
            breeding,
            quant,
            price,
            setStock
          )
        }
      >
        <h2>Create Stock Item</h2>
        <h3>Fish Name</h3>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Fish Name (required)"
        />
        <h3>Scientific Name</h3>
        <input
          type="text"
          name="name"
          onChange={(e) => setScientific(e.target.value)}
          placeholder="Scientific Name (required)"
        />
        <h3>Image Link</h3>
        <input
          type="text"
          name="name"
          onChange={(e) => setImg(e.target.value)}
          placeholder="Image (required)"
        />
        <h3>Habitat</h3>
        <input
          type="text"
          name="name"
          onChange={(e) => setHab(e.target.value)}
          placeholder="Water Habitat Type"
        />
        <h3>Description</h3>
        <input
          type="text"
          name="name"
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Basic description (required)"
        />
        <h3>Compatibility Section</h3>
        <h3>Temperature</h3>
        <input
          type="text"
          name="name"
          onChange={(e) => setTemperature(e.target.value)}
          placeholder="Water Temperature"
        />
        <h3>Temperament</h3>
        <input
          type="text"
          name="name"
          onChange={(e) => setTemperament(e.target.value)}
          placeholder="Temperament"
        />
        <h3>Food Source</h3>
        <input
          type="text"
          name="name"
          onChange={(e) => setFood(e.target.value)}
          placeholder="Food Source"
        />
        <h3>Social</h3>
        <input
          type="text"
          name="name"
          onChange={(e) => setSocial(e.target.value)}
          placeholder="Social Information"
        />
        <h3>Breeding Type</h3>
        <input
          type="text"
          name="name"
          onChange={(e) => setBreeding(e.target.value)}
          placeholder="Breeding Information"
        />
        <h3>Quantity in stock</h3>
        <input
          type="text"
          name="name"
          onChange={(e) => setQuant(e.target.value)}
          placeholder="Stock Number (required)"
        />
        <h3>Price</h3>
        <input
          type="text"
          name="name"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price in 0.00 format (required)"
        />
        <button type="submit">Update</button>
      </form>

      <form onSubmit={(e) => deleteStock(e, del, setStock)}>
        <h2>Delete Stock Item</h2>
        <input
          type="text"
          name="name"
          onChange={(e) => setDel(e.target.value)}
          placeholder="Fish Name"
        />
        <button type="submit">Delete Account</button>
      </form>

      <h2 className="navText">Log Out</h2>
      <button type="submit" onClick={logoutHandler}>
        Log Out
      </button>

      {!admin && <Redirect to="/home" />}
    </div>
  );
};


export default Admin;

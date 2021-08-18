import React, { useState } from "react";
import { createFish, deleteStock, updateFish, findFish } from "../utils";
import { Redirect } from "react-router";

const Admin = ({setUser, admin, setAdmin, updateStock, setUpdateStock, setStock }) => {
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

//  if (updateStock) {
//       setName(updateStock.name)
// //       // setSurname(userFetch.user.surname);
// //       // setStreet(userFetch.user.street);
// //       // setCity(userFetch.user.city);
// //       // setPostcode(userFetch.user.postcode);
// //       // setEmail(userFetch.user.email);
// //       // setPass(userFetch.user.password);
//     };
console.log(updateStock)
console.log(setUpdateStock)

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("MyToken");
    setAdmin();
    setUser();
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
        <button type="submit">Delete Fish</button>
      </form>

      <form
          onSubmit={(e) =>
            findFish(e, name, setUpdateStock)}>
      <h2>Update Stock Item</h2>
      <h3>Fish Name</h3>
      <p>{name}</p>
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="(required)"
      />
      <button type="submit" >
        Find fish to update
      </button>
      </form>


      {updateStock ? (
        <form
          onSubmit={(e) =>
            updateFish(
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
          <h3>Scientific Name</h3>
          <p>{scientific}</p>
          <input onChange={(e) => setScientific(e.target.value)} />
          <h3>Image Link</h3>
          <p>{img}</p>
          <input onChange={(e) => setImg(e.target.value)} />
          <h3>Habitat</h3>
          <p>{hab}</p>
          <input onChange={(e) => setHab(e.target.value)} />
          <h3>Description</h3>
          <p>{desc}</p>
          <input onChange={(e) => setDesc(e.target.value)} />
          <h3>Compatibility Section</h3>
          <h3>Temperature</h3>
          <p>{temperature}</p>
          <input onChange={(e) => setTemperature(e.target.value)} />
          <h3>Temperament</h3>
          <p>{temperament}</p>
          <input onChange={(e) => setTemperament(e.target.value)} />
          <h3>Food Source</h3>
          <p>{food}</p>
          <input onChange={(e) => setFood(e.target.value)} />
          <h3>Social</h3>
          <p>{social}</p>
          <input onChange={(e) => setSocial(e.target.value)} />
          <h3>Breeding Type</h3>
          <p>{breeding}</p>
          <input onChange={(e) => setBreeding(e.target.value)} />
          <h3>Quantity in stock</h3>
          <p>{quant}</p>
          <input onChange={(e) => setQuant(e.target.value)} />
          <h3>Price</h3>
          <p>{price}</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price in 0.00 format (required)"
          />
          <button className="logBtn" type="submit">
            Update
          </button>
        </form>
      ) : null}

      <h2 className="navText">Log Out</h2>
      <button type="submit" onClick={logoutHandler}>
        Log Out
      </button>

      {!admin && <Redirect to="/" />}
    </div>
  );
};


export default Admin;

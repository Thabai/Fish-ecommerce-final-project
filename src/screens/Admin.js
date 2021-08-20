import React, { useState, useEffect } from "react";
import { createFish, deleteStock, updateFish, findFish } from "../utils";
import { Redirect } from "react-router";
import "./Admin.css";

const Admin = ({ setUser, admin, setAdmin, setStock }) => {
  const [updateStock, setUpdateStock] = useState([]);
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

  //create
  const [nameC, setNameC] = useState();
  const [scientificC, setScientificC] = useState();
  const [imgC, setImgC] = useState();
  const [habC, setHabC] = useState();
  const [descC, setDescC] = useState();
  const [temperatureC, setTemperatureC] = useState();
  const [temperamentC, setTemperamentC] = useState();
  const [foodC, setFoodC] = useState();
  const [socialC, setSocialC] = useState();
  const [breedingC, setBreedingC] = useState();
  const [quantC, setQuantC] = useState();
  const [priceC, setPriceC] = useState();

  useEffect(() => {
    try {
      setName(updateStock.fish.name);
      setScientific(updateStock.fish.scientific);
      setImg(updateStock.fish.img);
      setHab(updateStock.fish.habitat);
      setDesc(updateStock.fish.description);
      setTemperature(updateStock.fish.compatibility.temperature);
      setTemperament(updateStock.fish.compatibility.temperament);
      setFood(updateStock.fish.compatibility.foodsource);
      setSocial(updateStock.fish.compatibility.social);
      setBreeding(updateStock.fish.compatibility.breeding);
      setQuant(updateStock.fish.quantity);
      setPrice(updateStock.fish.price);
    } catch (error) {
      console.log(error);
    }
  }, [updateStock]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("MyToken");
    setAdmin();
    setUser();
  };
   console.log(updateStock);

  return (
    <div className="admin">
      <p className="admin__title">Admin</p>
      <div id="message"></div>
      <form
        className="admin__form"
        onSubmit={(e) =>
          createFish(
            e,
            nameC,
            scientificC,
            imgC,
            habC,
            descC,
            temperatureC,
            temperamentC,
            foodC,
            socialC,
            breedingC,
            quantC,
            priceC,
            setStock
          )
        }
      >
        <p className="admin__title">Create Stock Item</p>
        <p className="admin__note">Fish Name</p>
        <input
          type="text"
          name="name"
          onChange={(e) => setNameC(e.target.value)}
          placeholder="Fish Name (required)"
        />
        <p className="admin__note">Scientific Name</p>
        <input
          type="text"
          name="name"
          onChange={(e) => setScientificC(e.target.value)}
          placeholder="Scientific Name (required)"
        />
        <p className="admin__note">Image URL</p>
        <input
          type="text"
          name="name"
          onChange={(e) => setImgC(e.target.value)}
          placeholder="Image (required)"
        />
        <p className="admin__note">Habitat</p>
        <input
          type="text"
          name="name"
          onChange={(e) => setHabC(e.target.value)}
          placeholder="Water Habitat Type"
        />
        <p className="admin__note">Description</p>
        <input
          type="text"
          name="name"
          onChange={(e) => setDescC(e.target.value)}
          placeholder="Basic description (required)"
        />
        <p className="admin__title">Compatability</p>
        <p className="admin__note">Temperature</p>
        <input
          type="text"
          name="name"
          onChange={(e) => setTemperatureC(e.target.value)}
          placeholder="Water Temperature"
        />
        <p className="admin__note">Temperament</p>
        <input
          type="text"
          name="name"
          onChange={(e) => setTemperamentC(e.target.value)}
          placeholder="Temperament"
        />
        <p className="admin__note">Food Source</p>
        <input
          type="text"
          name="name"
          onChange={(e) => setFoodC(e.target.value)}
          placeholder="Food Source"
        />
        <p className="admin__note">Social</p>
        <input
          type="text"
          name="name"
          onChange={(e) => setSocialC(e.target.value)}
          placeholder="Social Information"
        />
        <p className="admin__note">Breeding Type</p>
        <input
          type="text"
          name="name"
          onChange={(e) => setBreedingC(e.target.value)}
          placeholder="Breeding Information"
        />
        <p className="admin__note">Stock Quantity</p>
        <input
          type="text"
          name="name"
          onChange={(e) => setQuantC(e.target.value)}
          placeholder="Stock Number (required)"
        />
        <p className="admin__note">Price</p>
        <input
          type="text"
          name="name"
          onChange={(e) => setPriceC(e.target.value)}
          placeholder="Price in 0.00 format (required)"
        />
        <button type="submit">Create Item</button>
      </form>

      <form
        className="admin__form"
        onSubmit={(e) => findFish(e, name, setUpdateStock)}
      >
        <p className="admin__title">Update Stock Item</p>
        <p className="admin__note">Fish Name</p>
        <p>{name}</p>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="(required)"
        />
        <button type="submit">Find fish to update</button>
      </form>
     

      {updateStock.length !== 0 ? (
        <form
          className="admin__form"
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
          <p className="admin__note">Scientific Name</p>
          <p>{scientific}</p>
          <input onChange={(e) => setScientific(e.target.value)} />
          <p className="admin__note">Image URL</p>
          <p>{img}</p>
          <input onChange={(e) => setImg(e.target.value)} />
          <p className="admin__note">Habitat</p>
          <p>{hab}</p>
          <input onChange={(e) => setHab(e.target.value)} />
          <p className="admin__note">Description</p>
          <p>{desc}</p>
          <input onChange={(e) => setDesc(e.target.value)} />
          <p className="admin__title">Compatability</p>
          <p className="admin__note">Temperature</p>
          <p>{temperature}</p>
          <input onChange={(e) => setTemperature(e.target.value)} />
          <p className="admin__note">Temperament</p>
          <p>{temperament}</p>
          <input onChange={(e) => setTemperament(e.target.value)} />
          <p className="admin__note">Food Source</p>
          <p>{food}</p>
          <input onChange={(e) => setFood(e.target.value)} />
          <p className="admin__note">Social</p>
          <p>{social}</p>
          <input onChange={(e) => setSocial(e.target.value)} />
          <p className="admin__note">Breeding Type</p>
          <p>{breeding}</p>
          <input onChange={(e) => setBreeding(e.target.value)} />
          <p className="admin__note">Stock Quantity</p>
          <p>{quant}</p>
          <input onChange={(e) => setQuant(e.target.value)} />
          <p className="admin__note">Price</p>
          <p>{price}</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price in 0.00 format"
          />
          <button className="logBtn" type="submit">
            Update
          </button>
        </form>
      ) : null}

      <form
        className="admin__form"
        onSubmit={(e) => deleteStock(e, del, setStock)}
      >
        <p className="admin__title">Delete Stock Item</p>
        <input
          type="text"
          name="name"
          onChange={(e) => setDel(e.target.value)}
          placeholder="Fish Name"
        />
        <button type="submit">Delete Fish</button>
      </form>

      <form className="admin__form">
        <p className="admin__title">Log Out</p>
        <button type="submit" onClick={logoutHandler}>
          Log Out
        </button>
      </form>

      {!admin && <Redirect to="/" />}
    </div>
  );
};

export default Admin;

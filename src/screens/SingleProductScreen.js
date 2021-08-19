import './SingleProductScreen.css';
import { Route } from "react-router-dom";

const ProductScreen = (fish) => {
    return (
      <div className="singleproductscreen">
        <h1>Name: {fish.value.name}</h1>
        <h2>Scientific Name: {fish.value.scientific}</h2>
        <img src={fish.value.img} alt="Fish Image" />
        <p>About: {fish.value.description}</p>
        <h2>Habitat: {fish.value.habitat}</h2>
        <h3>Price: {fish.value.price}</h3>
        <h3>Stock: {fish.value.quantity}</h3>
        <div>
          <h2>Compatibility: </h2>
          <h2>Temperature: {fish.value.compatibility.temperature}</h2>
          <h2>Temperament: {fish.value.compatibility.temperament}</h2>
          <h2>Food Source: {fish.value.compatibility.foodsource}</h2>
          <h3>Social: {fish.value.compatibility.social}</h3>
          <h3>Breeding: {fish.value.compatibility.breeding}</h3>
        </div>
      </div>
    );
};

const SingleProductScreen = (fish) => {
  return (
    <div>
      {fish.stock.map((value, index) => {
          return (
            <Route
              key={index}
              path={`/${value.name}`}
              children={<ProductScreen value={value} />}
            />
          );
      })}
    </div>
  );
};

export { SingleProductScreen };
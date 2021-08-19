import './SingleProductScreen.css';
import { Route } from "react-router-dom";

const ProductScreen = (fish) => {
    return (
        <div className="singleproductscreen">
            <h1>Type: {fish.value.name}</h1>
            <h2>Scientific Name: {fish.value.scientific}</h2>        
            <img src={fish.value.img} />
            <h2>Habitat: {fish.value.habitat}</h2>
            <h2>Compatibility: {fish.value.compatability}</h2>
            {/* <h2>Temperature: {fish.value.tempertature}</h2>
            <h2>Temperament: {fish.value.temperament}</h2> */}
            
            <p>About: {fish.value.description}</p>
            <h2>Food Source{fish.value.foodsource}</h2>
            <h3>Social: {fish.value.social}</h3>
            <h3>Breeding: {fish.value.breeding}</h3>
            <h3>Price: {fish.value.price}</h3>
            <h3>Stock: {fish.value.quantity}</h3>
        </div>
    )
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
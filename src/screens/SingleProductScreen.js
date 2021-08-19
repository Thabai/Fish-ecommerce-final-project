import './SingleProductScreen.css';
import { Route } from "react-router-dom";

const ProductScreen = (stock) => {
    return (
        <div className="singleproductscreen">
            <h1>{stock.value.name}</h1>
            <h3>{stock.value.description}</h3>

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
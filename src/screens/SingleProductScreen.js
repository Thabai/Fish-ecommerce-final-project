import './SingleProductScreen.css';
import { Route } from "react-router-dom";

const ProductScreen = (props) => {
    return (
        <div className="singleproductscreen">
            <h1>{props.value.name}</h1>
            <h3>{props.value.price}</h3>
        </div>
    )
};

const SingleProductScreen = (props) => {
  return (
    <div>
      {props.stock.map((value, index) => {
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
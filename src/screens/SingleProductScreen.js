import './SingleProductScreen.css';
import { Route, Link } from "react-router-dom";

const ProductScreen = (props) => {
    return (
        <div className="singleproductscreen">
            Product Screen
            <h1>HI</h1>
        </div>
    )
};

const SingleProductScreen = (props) => {
  return (
    <div>
      {props.data.map((value, index) => {
          return (
            <Route
              key={index}
              path={`/${value.id}`}
              children={<ProductScreen value={value} />}
            />
          );
      })}
    </div>
  );
};

export { SingleProductScreen };
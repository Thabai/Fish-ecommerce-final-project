import './SingleProductScreen.css';
import { Route } from "react-router-dom";

const ProductScreen = (fish) => {
    return (
      <div className='wrapper'>
      <div className="singleproductscreen">
        <h3 className='singleProdH'>Name: <span className='bright'>{fish.value.name}</span></h3>
        <h3 className='singleProdH'>Scientific Name: <span className='bright'> {fish.value.scientific}</span></h3>
        <img className='fishImage' src={fish.value.img} alt="Fish" />
        <p><span className='singleProdH'>About:</span> {fish.value.description}</p>
        <h3 className='singleProdH'>Habitat: <span className='bright'>{fish.value.habitat}</span></h3>
        <h3 className='singleProdH'>Price: <span className='bright'>£{fish.value.price.toFixed(2)}</span></h3>
        <h3 className='singleProdH'>Stock: <span className='bright'>{fish.value.quantity}</span></h3>
     
      </div> 
        <div className='compatInfo'>
          <h3 className='singleProdH titleBox'>Compatibility </h3>
          <h3 className='singleProdH'>Temperature:<span className='bright'> {fish.value.compatibility.temperature}</span></h3>
          <h3 className='singleProdH'>Temperament: <span className='bright'>{fish.value.compatibility.temperament}</span></h3>
          <h3 className='singleProdH'>Food Source: <span className='bright'>{fish.value.compatibility.foodsource}</span></h3>
          <h3 className='singleProdH'>Social:<span className='bright'>{fish.value.compatibility.social}</span> </h3>
          <h3 className='singleProdH'>Breeding: <span className='bright'>{fish.value.compatibility.breeding}</span></h3>
          {/* <button className="cart__button" onClick={() => onAdd(data)}>Add to cart</button> */}
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
import { Card } from "../components/CartCard";

export const List = ({ items, handleRemove, prices }) => {
  const total = prices.reduce((a, b) => a + b, 0);

  return (
    <div>
      <ul>
        {items.map((item, index) => {
          const price = prices[index];
          return (
            <Card
              key={index}
              price={price}
              rmFunction={() => handleRemove(index)}
            >
              {item}
            </Card>
          );
        })}
      </ul>
      <p className="total">Total: £{total}.00</p>
      <button className="checkout" type="button">
        Checkout
      </button>
    </div>
  );
};

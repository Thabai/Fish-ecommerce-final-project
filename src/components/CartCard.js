export const Card = ({ children, rmFunction, price }) => {
  return (
    <div>
      <li>
        <span>{children}</span>
        <p>£{price}.00</p>
        <button onClick={rmFunction}>Remove from Cart</button>
      </li>
    </div>
  );
};

import { StyledCounter } from "./style";

export const Counter = ({
  product,
  currentSale,
  setCurrentSale,
  removeProduct,
  cartReduce,
}) => {
  const addProduct = () => {
    product.count += 1;
    setCurrentSale([...currentSale]);
    cartReduce();
  };

  const subProduct = () => {
    if (product.count > 1) {
      product.count -= 1;
      setCurrentSale([...currentSale]);
      cartReduce();
    } else {
      removeProduct();
    }
  };

  return (
    <StyledCounter>
      <button
        onClick={() => {
          subProduct();
        }}
      >
        -
      </button>
      <p>{product.count}</p>
      <button
        onClick={() => {
          addProduct();
        }}
      >
        +
      </button>
    </StyledCounter>
  );
};

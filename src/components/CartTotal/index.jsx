import { StyledTotal } from "./style";

export const CartTotal = ({ cartTotal, setCurrentSale, products }) => {
  return (
    <StyledTotal>
      <div>
        <p>Total</p>
        <span>R${cartTotal.toFixed(2)}</span>
      </div>
      <button
        onClick={() => {
          products.forEach((product) => (product.count = 0));
          setCurrentSale([]);
        }}
      >
        Remover todos
      </button>
    </StyledTotal>
  );
};

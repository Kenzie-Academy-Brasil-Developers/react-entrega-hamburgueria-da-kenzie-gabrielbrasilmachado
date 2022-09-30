import { Counter } from "../Counter";
import { StyledCartItem } from "./style";

export const CartProduct = ({
  product,
  currentSale,
  setCurrentSale,
  cartReduce,
}) => {
  const removeProduct = () => {
    product.count = 0;
    setCurrentSale(currentSale.filter((item) => item.id !== product.id));
    cartReduce();
  };

  return (
    <StyledCartItem>
      <div className="cartProduct">
        <figure>
          <img src={product.img} alt={product.name} />
        </figure>
        <div className="cartProductTexts">
          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <Counter
            product={product}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            removeProduct={removeProduct}
            cartReduce={cartReduce}
          ></Counter>
        </div>
      </div>
      <span
        onClick={() => {
          removeProduct();
        }}
      >
        Remover
      </span>
    </StyledCartItem>
  );
};

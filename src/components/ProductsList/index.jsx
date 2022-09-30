import { Product } from "../Product";
import { StyledUl } from "./style";

export const ProductsList = ({
  setCurrentSale,
  products,
  filteredProducts,
  currentSale,
  cartReduce,
}) => {
  return (
    <StyledUl>
      {filteredProducts.length !== 0
        ? filteredProducts.map((product) => (
            <Product
              key={product.id}
              setCurrentSale={setCurrentSale}
              product={product}
              currentSale={currentSale}
              cartReduce={cartReduce}
            ></Product>
          ))
        : products.map((product) => (
            <Product
              key={product.id}
              setCurrentSale={setCurrentSale}
              product={product}
              currentSale={currentSale}
              cartReduce={cartReduce}
            ></Product>
          ))}
    </StyledUl>
  );
};

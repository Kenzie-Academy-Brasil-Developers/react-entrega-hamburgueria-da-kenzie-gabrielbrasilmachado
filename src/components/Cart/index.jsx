import { CartProduct } from "../CartProduct";
import { CartTotal } from "../CartTotal";
import { StyledCart } from "./style";

export const Cart = ({
  currentSale,
  setCurrentSale,
  cartTotal,
  cartReduce,
  products,
}) => {
  return (
    <StyledCart>
      <h2 className="cartTittle">Carrinho de compras</h2>
      {currentSale.length === 0 ? (
        <ul>
          <div className="emptyCart">
            <p>Sua sacola está vazia</p>
            <span>Adicione Itens</span>
          </div>
        </ul>
      ) : (
        <>
          <ul>
            {currentSale.map((product) => (
              <CartProduct
                key={product.id}
                product={product}
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
                cartReduce={cartReduce}
              ></CartProduct>
            ))}
          </ul>
          <CartTotal
            cartTotal={cartTotal}
            cartReduce={cartReduce}
            setCurrentSale={setCurrentSale}
            products={products}
          ></CartTotal>
        </>
      )}
    </StyledCart>
  );
};

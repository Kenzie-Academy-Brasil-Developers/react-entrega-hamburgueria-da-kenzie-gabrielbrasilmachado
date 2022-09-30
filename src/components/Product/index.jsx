import { useEffect } from "react";
import { toast } from "react-toastify";
import { StyledLi } from "./style";

export const Product = ({
  setCurrentSale,
  product,
  currentSale,
  cartReduce,
}) => {
  const addProduct = () => {
    if (currentSale.some((item) => item.id === product.id)) {
      product.count += 1;
      setCurrentSale([...currentSale]);
      toast.success(
        `O produto já está no carrinho! Foi adicionada uma quantidade ao produto.`,
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    } else {
      product.count += 1;
      setCurrentSale((oldCurrentSale) => [...oldCurrentSale, product]);
    }
  };

  useEffect(() => {
    cartReduce();
  }, [currentSale]);
  return (
    <StyledLi>
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>
      <div>
        <h2>{product.name}</h2>
        <p>{product.category}</p>
        <span>
          {product.price % 1 === 0
            ? `R$ ${product.price}.00`
            : `R$ ${product.price}`}
        </span>
        <button onClick={() => addProduct()}>Adicionar</button>
      </div>
    </StyledLi>
  );
};

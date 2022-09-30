import { useEffect, useState } from "react";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { api } from "./lib/axios";
import { GlobalStyle } from "./styles/global";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const cartReduce = () => {
    setCartTotal(
      currentSale.reduce((acc, crt) => {
        return acc + crt.price * crt.count;
      }, 0)
    );
  };

  useEffect(() => {
    api
      .get("/products")
      .then((res) =>
        setProducts(
          res.data.map((item) => {
            return { ...item, count: 0 };
          })
        )
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Flip}
      />
      <Header
        setFilteredProducts={setFilteredProducts}
        products={products}
      ></Header>
      <main>
        <ProductsList
          products={products}
          filteredProducts={filteredProducts}
          setCurrentSale={setCurrentSale}
          currentSale={currentSale}
          cartReduce={cartReduce}
        ></ProductsList>
        <Cart
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          cartTotal={cartTotal}
          cartReduce={cartReduce}
          products={products}
        ></Cart>
      </main>
    </div>
  );
}

export default App;

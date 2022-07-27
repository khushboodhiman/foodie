import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Products from "./Components/Products";
import { ProductList } from "./ProductList";
import { ProductContext } from "./ProductContext";
import { CartContext } from "./CartContext";
import Cart from "./Components/Cart";

function App() {
  const [products, setProducts] = useState(ProductList);
  const [openCart, setOpenCart] = useState(false);
  const [cart, setCart] = useState([]);

  const closeCart = () => {
    setOpenCart(false);
  };

  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        {openCart && <Cart closeCart={closeCart} />}
        <ProductContext.Provider value={{ products, setProducts }}>
          <div className="App">
            <Header setOpenCart={setOpenCart} />
            <Main />
            <Products />
          </div>
        </ProductContext.Provider>
      </CartContext.Provider>
    </>
  );
}

export default App;

import { useContext } from "react";
import ReactDOM from "react-dom";
import Cross from "../assets/icons/Cross";
import { CartContext } from "../CartContext";
import CartItem from "./CartItem";
import "./CartItem.css";

function Overlay(props) {
  const { cart, closeCart } = props;
  console.log("cart", cart);
  return (
    <div className="cart-wrapper">
      <div className="cart-header">
        <h1 className="cart-heading">Cart</h1>
        <button
          onClick={closeCart}
          style={{ backgroundColor: "transparent", border: 0 }}
        >
          <Cross />
        </button>
      </div>
      <div className="cart-body">
        {cart.map((item) => {
          return <CartItem item={item} key={item._id} />;
        })}
      </div>
      {console.log(props.cart)}
    </div>
  );
}

function Cart({ closeCart }) {
  const { cart, setCart } = useContext(CartContext);
  return ReactDOM.createPortal(
    <Overlay cart={cart} setCart={setCart} closeCart={closeCart} />,
    document.getElementById("modal-wrapper")
  );
}

export default Cart;

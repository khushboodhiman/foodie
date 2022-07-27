import Card from "./Card";
import "./ProductCard.css";
import { useContext, useRef } from "react";
import { CartContext } from "../CartContext";
import QuantityField from "./QuantityField";

function ProductCard({ product }) {
  const { name, desc, amount, image } = product;
  const quantity = useRef(1);
  const cartField = useRef("Add to Cart");
  const { cart, setCart } = useContext(CartContext);

  const addToCartHandler = (id) => {
    const newCartItem = {
      _id: id,
      name: name,
      desc: desc,
      amount: amount,
      image: image,
      quantity: quantity.current.value,
    };
    cart.push(newCartItem);
    setCart(cart);
    cartField.current.value = "Check Cart";
  };

  return (
    <>
      <Card>
        <img className="cardImage" src={image} alt={name} lazy></img>
        <div className="nameAmount">
          <div className="name">{name}</div>
          <div className="amount">{amount}</div>
        </div>
        <div className="desc">{desc}</div>
        <div className="cardFooter">
          <QuantityField quantity={quantity} />
          <input
            className={"primary-btn-sm addToCart"}
            type="button"
            name="add-to-cart"
            defaultValue="Add to Cart"
            ref={cartField}
            value={cartField.current.value}
            onClick={() => addToCartHandler(product._id)}
          />
        </div>
      </Card>
    </>
  );
}

export default ProductCard;

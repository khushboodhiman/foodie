import Card from "./Card";
import classes from "./ProductCard.module.css";
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
        <img className={classes.cardImage} src={image} alt={name} lazy></img>
        <div className={classes.nameAmount}>
          <div className={classes.name}>{name}</div>
          <div className={classes.amount}>{amount}</div>
        </div>
        <div className={classes.desc}>{desc}</div>
        <div className={classes.cardFooter}>
          <QuantityField quantity={quantity} />
          <input
            className={"primary-btn-s " + classes.addToCart}
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

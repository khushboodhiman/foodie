import { useState } from "react";
import Add from "../assets/icons/Add";
import Minus from "../assets/icons/Minus";
import classes from "./QuantityField.module.css";

function QuantityField() {
  const [quantity, setQuantity] = useState(1);
  const minusHandler = () => {
    if (quantity > 0) setQuantity((prev) => prev - 1);
  };

  const plusHandler = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className={classes.quantityField}>
      <button className={classes.quantityBtn} onClick={minusHandler}>
        <Minus />
      </button>
      <input
        className={classes.cardInput}
        type="number"
        name="quantity"
        min="0"
        value={quantity}
        onChange={(event) => setQuantity(parseInt(event.target.value, 10))}
      />
      <button className={classes.quantityBtn} onClick={plusHandler}>
        <Add />
      </button>
    </div>
  );
}

export default QuantityField;

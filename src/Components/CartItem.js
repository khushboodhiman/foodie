import QuantityField from "./QuantityField";
import "./CartItem.css";

function CartItem({ item }) {
  return (
    <div className="cart-container">
      <div className="image-container">
        <img src={item.image} alt=""></img>
      </div>
      <div className="desc-container">
        <h3 className="product-heading">{item.name}</h3>
        <p>{item.desc}</p>
        <div>
          <div className="quantity-price">
            <div>
              <div className="label">quantity</div>
              <QuantityField quantity={item.quantity} />
            </div>
            <div>
              <div className="label">Price</div>
              <p>{item.amount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

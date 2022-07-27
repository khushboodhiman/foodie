import classes from "./Header.module.css";

function Header({ setOpenCart }) {
  const showCart = () => {
    setOpenCart(true);
    console.log("Cart");
  };
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.logo}>F O O D I E</div>
      <div>
        <button className="primary-btn-sm" onClick={showCart}>
          C A R T
        </button>
      </div>
    </div>
  );
}

export default Header;

import classes from "./Main.module.css";
import main from "../assets/images/12.jpg";

function Main() {
  return (
    <div className={classes.mainWrapper}>
      <div className={classes.contentWrapper}>
        <h1>Straight out of the oven to your doorstep.</h1>
        <p>
          We always deliever our cooked with love food to our customers on time
          with guarantee.
        </p>
        <button className="primary-btn-lg">Order Now</button>
      </div>
      <div className={classes.imageWrapper}>
        <img src={main} alt="main"></img>
      </div>
    </div>
  );
}

export default Main;

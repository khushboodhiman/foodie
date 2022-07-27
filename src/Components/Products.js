import { useContext } from "react";
import { ProductContext } from "../ProductContext";
// import { ProductList } from "../ProductList";
import ProductCard from "./ProductCard";
import "./Products.css";

function Products() {
  const { products } = useContext(ProductContext);
  console.log(products);
  return (
    <div className="product-wrapper">
      {products.map((product) => {
        return <ProductCard product={product} key={product._id} />;
      })}
    </div>
  );
}

export default Products;

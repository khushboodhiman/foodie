import React from "react";

export const ProductContext = React.createContext({
  products: [],
  setProducts: (products) => {},
});

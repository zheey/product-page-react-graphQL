import React, { useContext, useReducer } from "react";
import { productReducer } from "../reducers/productReducer";
import { productInitialState } from "../constant/productConstants";

const ProductContext = React.createContext();


export const useProduct = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [cartState, dispatchProductActions] = useReducer(productReducer, productInitialState);

  const value = {
    cartState,
    dispatchProductActions
  };
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

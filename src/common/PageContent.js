import React from "react";
import Product from "./Product";
import { useProduct } from "../context/ProductContext";

const PageContent = () => {
  const { productState } = useProduct();
  const products = productState.products || [];
  return (
    <div className="product-content-wrapper">
      <div className="wrapper">
        <div className="product">
          {productState.isLoading ?
            <>
            <Product/>
            <Product/>
            <Product/>
            </>
            :
            products.map((product, index) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageContent;

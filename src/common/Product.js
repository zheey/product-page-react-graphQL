import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useProduct } from "../context/ProductContext";
import { ProductConstants } from "../constant/productConstants";
import { formatAmount } from "../helpers/productHelpers";

const Product = ({ product }) => {
  const { dispatchProductActions } = useProduct();
  const addProduct = () => {
    dispatchProductActions({
      type: ProductConstants.ADD_TO_CART,
      payload: { product }
    });
  };

  return (
    <div className="item">
      <div className="item-wrapper">
        <div className="item-wrapper-wrapper">
          <Link to="/">
            <img src={product.image_url} alt="product" />
            <h2>{product.title}</h2>
          </Link>
        </div>
        <div className="amount-wrapper">
          <p>From:&nbsp;</p>
          <p>NGN&nbsp;{ formatAmount(product.price) }</p>
        </div>
        <Button label="Add to Cart" onClick={addProduct} />
      </div>
    </div>
  );
};

export default Product;

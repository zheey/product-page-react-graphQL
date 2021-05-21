import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="item">
      <div className="item-wrapper">
        <div className="item-wrapper-wrapper">
          <Link to="/">
            <img
              src="https://cdn.shopify.com/s/files/1/2960/5204/products/age-management_1024x1024_ad6e7a36-7242-469c-9fb5-242f5ee9c83f_1024x1024.png?v=1602809968"
              alt="product"
            />
            <h2> Age Management Set</h2>
          </Link>
        </div>
        <div className="amount-wrapper">
          <p>From:&nbsp;</p>
          <p>NGN&nbsp;20,000.00</p>
        </div>
        <Button label="Add to Cart" />
      </div>
    </div>
  );
};

export default Product;

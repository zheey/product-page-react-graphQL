import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="item">
      <div className="item-wrapper">
        <div className="item-wrapper-wrapper">
          <Link to="/">
            <img
              src={ product.image_url }
              alt="product"
            />
            <h2>{ product.title }</h2>
          </Link>
        </div>
        <div className="amount-wrapper">
          <p>From:&nbsp;</p>
          <p>NGN&nbsp;{ product.price }</p>
        </div>
        <Button label="Add to Cart" />
      </div>
    </div>
  );
};

export default Product;

import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useProduct } from "../context/ProductContext";
import { ProductConstants } from "../constant/productConstants";
import { formatAmount } from "../helpers/productHelpers";

const Product = ({ product }) => {
  const { dispatchProductActions, productState } = useProduct();
  const addProduct = () => {
    dispatchProductActions({
      type: ProductConstants.ADD_TO_CART,
      payload: { productId: product.id }
    });
  };

  return (
    <div className="item" data-testid="products">
        {product ? (
          <div className="item-wrapper">
            <div className="item-wrapper-wrapper">
              <Link to="/">
                <img src={product.image_url} alt="product" />
                <h2>{product.title}</h2>
              </Link>
            </div>
            <div className="amount-wrapper">
              <p>From:&nbsp;</p>
              <p>{`${productState.selectedCurrency} ${
                productState.fetching ? "..." : formatAmount(product.price)
              }`}</p>
            </div>
            <Button label="Add to Cart" onClick={addProduct} dataTestid={`addToCart${product.id}`}/>
            </div>
        ) : (
          <>
              <div className="empty-item height-180" />
              <div className="empty-item height-30" />
              <div className="empty-item height-20" />
              <div className="empty-item height-50" />
          </>
        )}
    </div>
  );
};

export default Product;

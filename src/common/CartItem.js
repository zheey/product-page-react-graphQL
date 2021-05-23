import React, { useMemo } from "react";
import { formatAmount } from "../helpers/productHelpers";
import { useProduct } from "../context/ProductContext";
import { ProductConstants } from "../constant/productConstants";

const CartItem = ({ item }) => {
  /**
     * count: 2
id: 3
image_url: "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png"
price: 10000
product_options: Array(3)
0:
options: Array(5)
0:
value: "13-24"
__typename: "ProductOptionValue"
__proto__: Object
1: {__typename: "ProductOptionValue", value: "25-34"}
2: {__typename: "ProductOptionValue", value: "35-45"}
3: {__typename: "ProductOptionValue", value: "46-55"}
4: {__typename: "ProductOptionValue", value: "56+"}
length: 5
__proto__: Array(0)
title: "Age Bracket"
__typename: "ProductOption"
__proto__: Object
1: {__typename: "ProductOption", title: "Skin Type", options: Array(3)}
2: {__typename: "ProductOption", title: "Frequency", options: Array(4)}
length: 3
__proto__: Array(0)
title: "Premium-Grade Moisturizing Balm"
__typename: "Product"
     */
  const { dispatchProductActions } = useProduct();

  const totalPrice = useMemo(() => {
    const total = item.price * item.count;
    return total;
  }, [item]);

  const removeItem = () => {
    dispatchProductActions({
      type: ProductConstants.REMOVE_FROM_CART,
      payload: { productId: item.id }
    });
  };

  const increaseItem = () => {
    dispatchProductActions({
      type: ProductConstants.INCREASE_ITEM_COUNT,
      payload: { productId: item.id }
    });
  };

  const decreaseItem = () => {
    dispatchProductActions({
      type: ProductConstants.REDUCE_ITEM_COUNT,
      payload: { productId: item.id }
    });
  };

  return (
    <div className="cart-item">
      <div className="product-description">
        <span className="remove-btn" onClick={removeItem}>
          x
        </span>
        <h6>{item.title}</h6>
        <div>Combination</div>
        <div>
          <span>One time purchase of </span>
          Two Month
          <span> supply</span>.
        </div>
        <div className="quantity">
          <div className="selector">
            <span className="counter-action" onClick={decreaseItem}>-</span>
            <span className="counter-number">{item.count}</span>
            <span className="counter-action" onClick={increaseItem}>+</span>
          </div>
          <div className="price">NGN&nbsp;{formatAmount(totalPrice)}</div>
        </div>
      </div>
      <div className="product-image">
        <img src={item.image_url} alt="product" />
      </div>
    </div>
  );
};

export default CartItem;

import React, { useMemo } from "react";
import { formatAmount } from "../helpers/productHelpers";
import { useProduct } from "../context/ProductContext";
import { ProductConstants } from "../constant/productConstants";

const CartItem = ({ item }) => {  
  const { dispatchProductActions, productState } = useProduct();

  const cartItem = useMemo(() => {
    const itemInProduct  = productState.products.find(product => product.id === item.id);
    return itemInProduct;
  }, [productState.products, item]);

  const totalPrice = useMemo(() => {
    const total = cartItem.price * item.count;
    return total;
  }, [item, cartItem]);

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
    <div className="cart-item" data-testid="cartList">
      <div className="product-description">
        <span className="remove-btn" onClick={removeItem} data-testid={`removeItem${item.id}`}>
          x
        </span>
        <h6>{cartItem.title}</h6>
        <div>Combination</div>
        <div>
          <span>One time purchase of </span>
          Two Month
          <span> supply</span>.
        </div>
        <div className="quantity">
          <div className="selector">
            <span className="action" onClick={decreaseItem} data-testid={`decrease${item.id}`}>-</span>
            <span className="counter-number" data-testid="counter">{item.count}</span>
            <span className="action" onClick={increaseItem} data-testid={`increase${item.id}`}>+</span>
          </div>
          <div className="price">{`${productState.selectedCurrency} ${productState.fetching ? "..." : formatAmount(totalPrice)}`}</div>
        </div>
      </div>
      <div className="product-image">
        <img src={cartItem.image_url} alt="product" />
      </div>
    </div>
  );
};

export default CartItem;

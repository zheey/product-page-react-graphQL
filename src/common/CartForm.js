import React from "react";
import { useProduct } from "../context/ProductContext";
import { ProductConstants } from "../constant/productConstants";
import CurrencySelect from "./CurrencySelect";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";

const CartForm = () => {
  const { dispatchProductActions, productState } = useProduct();
  const toggleCart = () => {
    dispatchProductActions({
      type: ProductConstants.TOGGLE_CART
    });
  };
  return (
    <form className="cart-form-wrapper">
      <div className="in-cart-overlay"></div>
      <div className="cart-top">
        <div className="back" onClick={() => toggleCart()}>
          <div className="icon">></div>
        </div>
        <div>
          <h5 className="cart-title">Your Cart</h5>
        </div>
      </div>
      <div className="currency-select-row">
        <CurrencySelect />
      </div>
      <div className="cart-body">
        <div className="cart-item-list">
          {productState.cart.length > 0
            ? productState.cart.map(item => (
                <CartItem item={item} key={item.id} />
              ))
            : <p>There are no items in your cart.</p>}
        </div>
      </div>
      <CartFooter />
    </form>
  );
};

export default CartForm;

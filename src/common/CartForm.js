import React from "react";
import { useProduct } from "../context/ProductContext";
import { ProductConstants } from "../constant/productConstants";
import CurrencySelect from "./CurrencySelect";

const CartForm = () => {
    const { dispatchProductActions } = useProduct();

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
                    <div className="icon">
                        >
                    </div>
                </div>
                <div>
                    <h5 className="cart-title">
                        Your Cart
                    </h5>
                </div>
            </div>
            <div className="currency-select-row">
                <CurrencySelect/>
            </div>
        </form>
    )
};

export default CartForm;
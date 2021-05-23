import React, { useMemo } from "react";
import Button from "./Button";
import { useProduct } from "../context/ProductContext";
import { formatAmount } from "../helpers/productHelpers";

const CartFooter = () => {
  const { productState } = useProduct();
  const totalPrice = useMemo(() => {
    const total = productState.cart.reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
    return total;
  }, [productState.cart]);
  return (
    <div className="cart-footer">
      <div className="subtotal">
        <span>Subtotal</span>
        <div className="price">NGN&nbsp;{formatAmount(totalPrice)}</div>
      </div>
      <div className="cart-buttons">
        <Button label="MAKE THIS A SUBSCRIPTION (SAVE 20%)" />
        <Button label="PROCEED TO CHECKOUT" className="proceed-btn" />
      </div>
    </div>
  );
};

export default CartFooter;

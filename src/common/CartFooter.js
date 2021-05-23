import React, { useMemo } from "react";
import Button from "./Button";
import { useProduct } from "../context/ProductContext";
import { formatAmount } from "../helpers/productHelpers";

const CartFooter = () => {
  const { productState } = useProduct();
  const totalPrice = useMemo(() => {
    const total = productState.cart.reduce((acc, item) => {
      const itemInProduct = productState.products.find(
        product => product.id === item.id
      );
      return acc + (itemInProduct.price * item.count);
    }, 0);
    return total;
  }, [productState.cart, productState.products]);
  return (
    <div className="cart-footer">
      <div className="subtotal">
        <span>Subtotal</span>
        <div className="price">{`${productState.selectedCurrency} ${productState.fetching ? "..." : formatAmount(totalPrice)}`}</div>
      </div>
      <div className="cart-buttons">
        <Button label="MAKE THIS A SUBSCRIPTION (SAVE 20%)" />
        <Button label="PROCEED TO CHECKOUT" className="proceed-btn" />
      </div>
    </div>
  );
};

export default CartFooter;

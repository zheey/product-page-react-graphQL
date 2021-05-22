import { ProductConstants } from "../constant/productConstants";

export const productReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ProductConstants.SET_PRODUCTS: {
      return {
        ...state,
        products: payload.products
      };
    }

    case ProductConstants.TOGGLE_CART: {
      return {
        ...state,
        showCart: !state.showCart
      };
    }

    default: {
      return state;
    }
  }
};

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

    default: {
      return state;
    }
  }
};

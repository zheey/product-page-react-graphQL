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

    case ProductConstants.ADD_TO_CART: {
      const { product } = payload;
      let cart = state.cart;
      const hasProduct = cart.find(item => item.id === product.id);
      if (hasProduct) {
        cart = cart.map(item => {
          if (item.id === product.id) {
            return {
              ...item,
              count: item.count + 1
            };
          }
          return { ...item };
        });
      } else {
        const newCartProduct = {
          ...product,
          count: 1
        };

        cart = [...cart, newCartProduct];
      }
      return {
        ...state,
        showCart: true,
        cart
      };
    }

    case ProductConstants.REMOVE_FROM_CART: {
      const { productId } = payload;
      let cart = state.cart;
      cart = cart.filter(item => item.id !== productId);
      return {
        ...state,
        showCart: true,
        cart
      };
    }

    case ProductConstants.INCREASE_ITEM_COUNT: {
      const { productId } = payload;
      let cart = state.cart;
      cart = cart.map(item => {
        if(item.id === productId) {
          return {
            ...item,
            count: item.count + 1
          }
        }
        return { ...item };
      });
      return {
        ...state,
        showCart: true,
        cart
      };
    }

    case ProductConstants.REDUCE_ITEM_COUNT: {
      const { productId } = payload;
      let cart = state.cart;
      let cartItem = cart.find(item => item.id === productId);
      const itemNewCount = cartItem.count - 1; 
      if(itemNewCount < 1) {
        cart = cart.filter(item => item.id !== productId);
      } else {
        cart = cart.map(item => {
          if(item.id === productId) {
            return {
              ...item,
              count: itemNewCount
            }
          }
          return { ...item };
        });
      }
      return {
        ...state,
        showCart: true,
        cart
      };
    }

    default: {
      return state;
    }
  }
};

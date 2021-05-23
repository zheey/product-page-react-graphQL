export const ProductConstants = {
    SET_PRODUCTS: "SET_PRODUCTS",
    TOGGLE_CART: "TOGGLE_CART",
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    REDUCE_ITEM_COUNT: "REDUCE_ITEM_COUNT",
    INCREASE_ITEM_COUNT: "INCREASE_ITEM_COUNT",
    CHANGE_CURRENCY: "CHANGE_CURRENCY"
};

export const productInitialState = {
    products: [],
    showCart: false,
    cart: [],
    selectedCurrency: "NGN",
    isLoading: true
};
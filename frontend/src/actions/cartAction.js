export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART_ITEM_QUANTITY = 'UPDATE_CART_ITEM_QUANTITY';
export const SAVE_TO_CHECKOUT = 'SAVE_TO_CHECKOUT';

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: { ...product, quantity: 1 }
  };
};

export const updateCartItemQuantity = (productId, quantity) => {
  return {
    type: UPDATE_CART_ITEM_QUANTITY,
    payload: { productId, quantity }
  };
};

export const saveToCheckout = (cartItems) => {
  return {
    type: SAVE_TO_CHECKOUT,
    payload: cartItems
  };
};

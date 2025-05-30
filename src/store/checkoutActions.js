// src/store/checkoutActions.js

export const PERFORM_CHECKOUT = 'PERFORM_CHECKOUT';

export const performCheckout = (userDetails, cartItems, totalAmount) => {
  return {
    type: PERFORM_CHECKOUT,
    payload: {
      userDetails,
      cartItems,
      totalAmount,
      checkoutDate: new Date().toISOString()
    }
  };
};

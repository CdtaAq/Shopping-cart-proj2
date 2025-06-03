export const addCoupon = (code) => async (dispatch) => {
  try {
    dispatch({ type: 'ADD_COUPON_SUCCESS', payload: code });
  } catch (error) {
    dispatch({ type: 'ADD_COUPON_FAIL', error });
  }
};
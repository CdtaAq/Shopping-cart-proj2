const initialState = {
  couponCode: null
};

const couponReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GENERATE_COUPON':
      return { ...state, couponCode: action.payload };
    default:
      return state;
  }
};

export default couponReducer;

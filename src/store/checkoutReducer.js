// src/store/checkoutReducer.js

import { PERFORM_CHECKOUT } from './checkoutActions';

const initialState = {
  history: []
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case PERFORM_CHECKOUT:
      return {
        ...state,
        history: [...state.history, action.payload]
      };
    default:
      return state;
  }
};

export default checkoutReducer;

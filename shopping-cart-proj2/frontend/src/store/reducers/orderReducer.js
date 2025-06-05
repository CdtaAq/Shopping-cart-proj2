const initialState = {
  orders: []
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ORDERS':
      return { ...state, orders: action.payload };
    case 'CANCEL_ORDER':
      return {
        ...state,
        orders: state.orders.map(order =>
          order._id === action.payload._id ? action.payload : order
        )
      };
    default:
      return state;
  }
};

export default orderReducer;

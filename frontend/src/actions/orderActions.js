import axios from 'axios';

export const saveOrder = (order) => async (dispatch) => {
  await axios.post('/api/orders/save', order);
  dispatch({ type: 'ORDER_SAVED', payload: order });
};

export const fetchOrders = (userId) => async (dispatch) => {
  const res = await axios.get(`/api/orders/user/${userId}`);
  dispatch({ type: 'FETCH_ORDERS', payload: res.data });
};

export const cancelOrder = (orderId) => async (dispatch) => {
  const res = await axios.put(`/api/orders/cancel/${orderId}`);
  dispatch({ type: 'CANCEL_ORDER', payload: res.data });
};

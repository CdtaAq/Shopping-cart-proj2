import axios from 'axios';

export const submitReview = (reviewData) => async (dispatch) => {
  const res = await axios.post('/api/reviews', reviewData);
  dispatch({ type: 'SUBMIT_REVIEW', payload: res.data });
};

export const getReviewsByProduct = (productId) => async (dispatch) => {
  const res = await axios.get(`/api/reviews/product/${productId}`);
  dispatch({ type: 'FETCH_REVIEWS', payload: res.data });
};

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitReview } from '../store/reviewActions';

const ReviewComponent = ({ product, orderId, disabled }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!disabled) {
      dispatch(submitReview({ productId: product._id, orderId, rating, comment }));
    }
  };

  return (
    <div>
      <h4>Review for {product.name}</h4>
      <input
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Rating (1-5)"
        disabled={disabled}
      />
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Comment"
        disabled={disabled}
      />
      <button onClick={handleSubmit} disabled={disabled}>Submit Review</button>
    </div>
  );
};

export default ReviewComponent;

import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartActions';

const ReorderComponent = ({ order }) => {
  const dispatch = useDispatch();

  const handleReorder = () => {
    order.order.forEach(item => {
      dispatch(addToCart(item));
    });
  };

  return (
    <button onClick={handleReorder}>Reorder This</button>
  );
};

export default ReorderComponent;

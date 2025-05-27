import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/productActions';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border p-4 rounded shadow-sm">
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Rating: {product.rating}</p>
      <p className="font-bold">${product.price}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;

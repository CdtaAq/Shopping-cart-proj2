// src/components/ProductComponent.js
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/productActions';

function ProductComponent() {
  const nameRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const ratingRef = useRef();
  const categoryRef = useRef();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      name: nameRef.current.value,
      description: descRef.current.value,
      price: parseFloat(priceRef.current.value),
      rating: parseFloat(ratingRef.current.value),
      category: categoryRef.current.value
    };
    dispatch(addProduct(product));
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} placeholder="Name" required />
        <input ref={descRef} placeholder="Description" required />
        <input ref={priceRef} type="number" placeholder="Price" required />
        <input ref={ratingRef} type="number" placeholder="Rating" required />
        <input ref={categoryRef} placeholder="Category" required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default ProductComponent;

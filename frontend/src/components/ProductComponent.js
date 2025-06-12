import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../store/productActions';
import { addNotification } from '../store/notificationActions';

const ProductComponent = () => {
  const nameRef = useRef();
  const priceRef = useRef();
  const descRef = useRef();
  const ratingRef = useRef();
  const categoryRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const handleSubmit = () => {
    const product = {
      name: nameRef.current.value,
      price: priceRef.current.value,
      description: descRef.current.value,
      rating: ratingRef.current.value,
      category: categoryRef.current.value,
    };
    dispatch(addProduct(product));
    dispatch(addNotification("Product added successfully"));
  };

  return (
    <div>
      <h2>Add Product</h2>
      {user?.name === "admin" && (
        <div>
          <input ref={nameRef} placeholder="Name" />
          <input ref={priceRef} placeholder="Price" />
          <input ref={descRef} placeholder="Description" />
          <input ref={ratingRef} placeholder="Rating" />
          <input ref={categoryRef} placeholder="Category" />
          <button onClick={handleSubmit}>Save Product</button>
        </div>
      )}
    </div>
  );
};

export default ProductComponent;

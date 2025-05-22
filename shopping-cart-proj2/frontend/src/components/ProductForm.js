import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/productActions';
import { toast } from 'react-toastify';

const ProductForm = () => {
  const nameRef = useRef();
  const priceRef = useRef();
  const descRef = useRef();
  const ratingRef = useRef();
  const imageRef = useRef();

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !nameRef.current.value ||
      !priceRef.current.value ||
      !descRef.current.value ||
      !ratingRef.current.value
    ) {
      toast.error('Please fill all fields');
      return;
    }

    const formData = new FormData();
    formData.append('name', nameRef.current.value);
    formData.append('price', priceRef.current.value);
    formData.append('description', descRef.current.value);
    formData.append('rating', ratingRef.current.value);
    if (imageRef.current.files[0]) {
      formData.append('image', imageRef.current.files[0]);
    }

    try {
      setLoading(true);
      await dispatch(addProduct(formData));
      toast.success('Product added');
      e.target.reset();
    } catch {
      toast.error('Failed to add product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow max-w-md mx-auto mb-8"
    >
      <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
      <input
        ref={nameRef}
        type="text"
        placeholder="Name"
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        ref={priceRef}
        type="number"
        placeholder="Price"
        className="w-full mb-3 p-2 border rounded"
      />
      <textarea
        ref={descRef}
        placeholder="Description"
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        ref={ratingRef}
        type="number"
        step="0.1"
        placeholder="Rating"
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        ref={imageRef}
        type="file"
        accept="image/*"
        className="mb-3"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
      >
        {loading ? 'Adding...' : 'Add Product'}
      </button>
    </form>
  );
};

export default ProductForm;

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchProducts,
  deleteProduct,
  updateProduct,
} from '../store/productActions';
import { toast } from 'react-toastify';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  const [loading, setLoading] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [query, setQuery] = useState('');
  const [sortField, setSortField] = useState('name');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteProduct(id));
      toast.success('Product deleted');
    } catch {
      toast.error('Failed to delete product');
    }
  };

  const handleEdit = (product) => {
    setEditProduct({ ...product });
  };

  const handleEditChange = (e) => {
   

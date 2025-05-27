import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Cart = () => {
  const cartItems = useSelector((state) => state.product.cart || []);

  const handleCheckout = async () => {
    try {
      await axios.post('http://localhost:5000/api/cart/save-cart', { items: cartItems });
      alert('Cart saved successfully for checkout!');
    } catch (error) {
      alert('Error saving cart.');
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="border-b py-2">
          <strong>{item.name}</strong> - ${item.price}
        </div>
      ))}
      <button
        className="bg-green-600 text-white mt-4 px-4 py-2 rounded"
        onClick={handleCheckout}
      >
        Save to Checkout
      </button>
    </div>
  );
};

export default Cart;

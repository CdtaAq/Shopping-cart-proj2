import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector(state => state.product.cart || []);

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="mb-2 border-b pb-2">
              <div className="flex justify-between">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

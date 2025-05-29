// src/components/CartComponent.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveToCheckout, updateCartItemQuantity } from '../store/cartActions';
import { useNavigate } from 'react-router-dom';

function CartComponent() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuantityChange = (id, qty) => {
    dispatch(updateCartItemQuantity(id, qty));
  };

  const handleSaveToCheckout = () => {
    dispatch(saveToCheckout(cartItems));
    navigate('/checkout');
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Qty:
            <input
              type="number"
              value={item.quantity}
              min={1}
              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
            />
            - ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleSaveToCheckout}>Go To Checkout</button>
    </div>
  );
}

export default CartComponent;

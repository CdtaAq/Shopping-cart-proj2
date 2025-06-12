import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, saveCartToCheckout } from '../store/cartActions';
import { addNotification } from '../store/notificationActions';

const CartComponent = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    dispatch(addNotification("Item removed from cart"));
  };

  const handleSave = () => {
    dispatch(saveCartToCheckout(cartItems));
    dispatch(addNotification("Cart saved for checkout"));
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((item, idx) => (
        <div key={idx}>
          <p>{item.name} - ${item.price}</p>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
      <button onClick={handleSave}>Go To Checkout</button>
    </div>
  );
};

export default CartComponent;

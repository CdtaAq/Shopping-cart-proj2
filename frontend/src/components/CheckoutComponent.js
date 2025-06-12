import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNotification } from '../store/notificationActions';

const CheckoutComponent = () => {
  const cart = useSelector(state => state.cart.items);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const [paid, setPaid] = useState(false);

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  const handlePayment = () => {
    setPaid(true);
    dispatch(addNotification("Payment successful, order processing..."));
  };

  return (
    <div>
      <h2>{paid ? "Payment Page" : "Checkout Page"}</h2>
      {!paid ? (
        <>
          <p>We will deliver products to: {user?.address || "your address"}</p>
          <table>
            <thead><tr><th>Name</th><th>Price</th></tr></thead>
            <tbody>
              {cart.map((item, idx) => (
                <tr key={idx}><td>{item.name}</td><td>{item.price}</td></tr>
              ))}
            </tbody>
          </table>
          <p>Total: ${total}</p>
          <button onClick={handlePayment}>Make Payment</button>
        </>
      ) : (
        <h3>Thank you for the payment, your items are under process!</h3>
      )}
    </div>
  );
};

export default CheckoutComponent;

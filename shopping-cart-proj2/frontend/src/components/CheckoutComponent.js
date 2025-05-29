// src/components/CheckoutComponent.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function CheckoutComponent() {
  const [paymentDone, setPaymentDone] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (paymentDone) {
    return (
      <div>
        <h2>Payment Page</h2>
        <p>Thank you for the payment, your items are under process!</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Checkout Page</h2>
      <p>We will deliver the products to: <strong>John Doe, 123 Main Street</strong></p>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name} - Qty: {item.quantity} - ${item.price * item.quantity}</li>
        ))}
      </ul>
      <h3>Total Quantity: {totalQty}</h3>
      <h3>Total Amount: ${totalPrice.toFixed(2)}</h3>
      <button onClick={() => setPaymentDone(true)}>Make Payment</button>
    </div>
  );
}

export default CheckoutComponent;

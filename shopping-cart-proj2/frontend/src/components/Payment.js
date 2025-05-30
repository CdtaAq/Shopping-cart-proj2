// src/components/Payment.js
import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';

const CARD_OPTIONS = {
  style: {
    base: {
      fontSize: "16px",
      color: "#424770",
      "::placeholder": { color: "#aab7c4" },
    },
    invalid: { color: "#9e2146" },
  },
};

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentStatus, setPaymentStatus] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();

    const { data: clientSecret } = await axios.post('/api/create-payment-intent', {
      amount: 5000, // example: $50.00
    });

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      setPaymentStatus('Payment Failed: ' + result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        setPaymentStatus('Payment Successful!');
      }
    }
  };

  return (
    <div>
      <h2>Pay with Card</h2>
      <form onSubmit={handlePayment}>
        <CardElement options={CARD_OPTIONS} />
        <button type="submit" disabled={!stripe}>Pay</button>
      </form>
      <p>{paymentStatus}</p>
    </div>
  );
};

export default Payment;

import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_YOUR_PUBLISHABLE_KEY"); // Replace with LIVE key

const PaymentComponent = ({ cartItems }) => {
  const handleCheckout = async () => {
    const response = await fetch("/api/stripe/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cartItems }),
    });

    const session = await response.json();
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <button onClick={handleCheckout} className="btn btn-success">
      Pay with Stripe
    </button>
  );
};

export default PaymentComponent;

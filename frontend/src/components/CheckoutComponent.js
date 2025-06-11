import React from "react";
import PaymentComponent from "../components/PaymentComponent";
import { useSelector } from "react-redux";

const CheckoutComponent = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Checkout Page</h2>
      {/* Cart summary table, user address etc. */}
      <PaymentComponent cartItems={cart.items} />
    </div>
  );
};

export default CheckoutComponent;

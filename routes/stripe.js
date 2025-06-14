const express = require("express");
const router = express.Router();
const stripe = require("stripe")("sk_test_YOUR_SECRET_KEY"); // Replace with LIVE key

router.post("/create-checkout-session", async (req, res) => {
  const { cartItems } = req.body;

  const lineItems = cartItems.map(item => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.name,
        description: item.description,
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity || 1,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ id: session.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

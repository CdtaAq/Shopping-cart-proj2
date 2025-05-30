// server/routes/paymentRouter.js
const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = Stripe('sk_test_your_test_secret_key'); // replace with env variable in prod

router.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    });

    res.send(paymentIntent.client_secret);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;

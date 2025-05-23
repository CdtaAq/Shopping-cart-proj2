const express = require('express');
const router = express.Router();
const CartModel = require('../model/Cart');

router.post('/save-cart', async (req, res) => {
  try {
    const cart = new CartModel({ items: req.body.items });
    await cart.save();
    res.status(201).json({ message: 'Cart saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving cart' });
  }
});

module.exports = router;

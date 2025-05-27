const express = require('express');
const router = express.Router();
const Cart = require('../model/Cart');

router.post('/save-cart', async (req, res) => {
  try {
    const cart = new Cart({ items: req.body.items });
    await cart.save();
    res.status(201).json({ message: 'Cart saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save cart' });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();

// Save coupon to DB (example)
router.post('/add', async (req, res) => {
  const { code } = req.body;
  if (code) {
    return res.status(200).json({ message: 'Coupon saved!', code });
  } else {
    return res.status(400).json({ error: 'Coupon code required' });
  }
});

module.exports = router;
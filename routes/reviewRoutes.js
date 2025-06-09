const express = require('express');
const router = express.Router();
const Review = require('../models/reviewModel');

router.post('/', async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.send(review);
});

router.get('/product/:productId', async (req, res) => {
  const reviews = await Review.find({ productId: req.params.productId });
  res.send(reviews);
});

module.exports = router;

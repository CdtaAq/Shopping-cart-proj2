const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  productId: String,
  orderId: String,
  rating: Number,
  comment: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', reviewSchema);

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  rating: Number,
  category: String
});

module.exports = mongoose.model('Product', productSchema);

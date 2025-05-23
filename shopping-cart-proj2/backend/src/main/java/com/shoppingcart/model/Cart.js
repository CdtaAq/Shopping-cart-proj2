const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  items: [{ name: String, price: Number, quantity: Number }]
});

module.exports = mongoose.model('Cart', cartSchema);

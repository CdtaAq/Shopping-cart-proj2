const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: String,
  order: Array,
  dateTime: { type: Date, default: Date.now },
  status: { type: String, default: 'Placed' }
});

module.exports = mongoose.model('RecentOrder', orderSchema);

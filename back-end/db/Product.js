const mongoose = require('mongoose');
const productsSchema = mongoose.Schema({
  name: String,
  price: String,
  category: String,
  company: String,
});

const model = mongoose.model('product', productsSchema);
module.exports = model;

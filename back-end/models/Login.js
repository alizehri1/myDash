const mongoose = require('mongoose');
const loginSchema = mongoose.Schema({
  email: String,
  password: String,
  
});

const model = mongoose.model('login', loginSchema);
module.exports = model;

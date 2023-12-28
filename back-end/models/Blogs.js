const mongoose = require('mongoose');
const blogSchema = mongoose.Schema({
  name: {
    type: String,
  },

  email: {
    type: String,
  },

  title: {
    type: String,
  },

  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const model = mongoose.model('blogs', blogSchema);
module.exports = model;

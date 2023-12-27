const mongoose = require('mongoose');
const blogSchema = mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  
  email:{
    type:String,
    required:true
  },
  
  title:{
    type:String,
    required:true
  },
  
  description:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now()
  }
});

const model = mongoose.model('blogs', blogSchema);
module.exports = model;

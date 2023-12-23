const mongoose = require('mongoose');
const db = async () => {
  await mongoose
    .connect(
      'mongodb+srv://alizehri1234:zehri007@cluster0.cu9fyet.mongodb.net/?retryWrites=true&w=majority'
    )
    .then(() => {
      console.log('db connected');
    })
    .catch((err) => {
      console.log('error');
    });
};
module.exports = db;

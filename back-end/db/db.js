const mongoose = require('mongoose');
const db = async () => {
  await mongoose
    .connect(
      'mongodb+srv://alizehri1:zehri007@cluster0.mdhsde4.mongodb.net/EcommerceDB?retryWrites=true&w=majority'
    )
    .then(() => {
      console.log('db connected');
    })
    .catch((err) => {
      console.log('error');
    });
};
module.exports = db;

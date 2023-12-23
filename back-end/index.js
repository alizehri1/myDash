const express = require('express');

const cors = require('cors');
app.use(cors());

const app = express();

const product = require('./db/Product');
const db = require('./db/db');

const userModel = require('./db/Users');
db();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.post('/register', (req, resp) => {
  resp.send('api in progress...');
});

app.get('/send', (req, res) => {
  res.send('send route');
});
app.get('/create', cors(), (req, res) => {});
app.post('/create', (req, res) => {
  const { names, email, pass } = req.body;
  userModel.create({
    names,
    email,
    password: pass,
  });
  res.send('user created');
});

app.listen(5000, (err) => {
  if (err) {
    console.log('error in port');
  }
  console.log('port is listening');
});

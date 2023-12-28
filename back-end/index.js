const express = require('express');

const cors = require('cors');


const app = express();


const db = require('./db/db');

db();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.get('/send', (req, res) => {
//   res.send('send route');
// });

app.use('/api' , require('./routes/Signup'))
app.use('/api' , require('./routes/Login'))
app.use('/api' , require('./routes/Blogs'))


app.listen(5001, ()=>{
  console.log('port is listening 5001 port')
})
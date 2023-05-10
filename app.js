const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


const app = express();
app.use(express.json());
app.use(
    cors({
      credentials: true,
      origin: process.env.FRONTEND_URL,
      allowedHeaders: '*'
    })
  );
app.use(morgan('dev'));

app.use('/',(req,res) => {
  res.json({message: 'test successful'})
})
module.exports = app ;

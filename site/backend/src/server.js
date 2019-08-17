const express = require('express');
const server = express();
const mongoose = require('mongoose');

const routes = require('./routes')

mongoose.connect('mongodb+srv://admin:admin@serverp3-mydtc.mongodb.net/serverP3?retryWrites=true&w=majority',{
  useNewUrlParser : true
});

server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Methods', ['PATCH', 'POST', 'GET', 'DELETE', 'PUT']);
  res.setHeader('Access-Control-Allow-Headers', ['Content-Type']);
  res.setHeader('Access-Control-Expose-Headers', ['Content-Type']);
  next();
});

server.use(express.json());
server.use(routes);

server.listen(3333);
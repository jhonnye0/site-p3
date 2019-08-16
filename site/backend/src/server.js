const express = require('express');
const server = express();
const mongoose = require('mongoose');

const routes = require('./routes')

mongoose.connect('mongodb+srv://admin:admin@serverp3-mydtc.mongodb.net/serverP3?retryWrites=true&w=majority',{
  useNewUrlParser : true
});

server.use(express.json());
server.use(routes);

server.listen(3333);
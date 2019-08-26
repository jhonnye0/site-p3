const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes')

mongoose.connect('mongodb+srv://admin:admin@serverp3-mydtc.mongodb.net/serverP3?retryWrites=true&w=majority',{
  useNewUrlParser : true
});

server.use(cors());
server.options('*', cors());

server.use(express.json());
server.use(routes);

var port = process.env.PORT || 3333;

server.listen(port);
const express = require('express');
const routes = express.Router();

const LikeController = require('./controllers/LikeController');
const UserController = require('./controllers/UserController');
const ContractController = require('./controllers/ContractController');
const LoginController = require('./controllers/LoginController');

routes.post('/user', UserController.store);
routes.post('/user/assassins/:userId', LikeController.store);
routes.post('/user/assassins/:userId/contract', ContractController.store);
routes.post('/login', LoginController.LogInAuthentication)

module.exports = routes;
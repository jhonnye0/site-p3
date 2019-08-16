const express = require('express');
const routes = express.Router();

const LikeController = require('./controllers/LikeController');
const UserController = require('./controllers/UserController');
const ContractController = require('./controllers/ContractController');

routes.post('/user', UserController.store);
routes.post('/user/assassins/:userId', LikeController.store);
routes.post('/user/assassins/:userId/contract', ContractController.store);

module.exports = routes;
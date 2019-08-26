const express = require('express');
const routes = express.Router();

const LikeController = require('./controllers/LikeController');
const UserController = require('./controllers/UserController');
const ContractController = require('./controllers/ContractController');
const LoginController = require('./controllers/LoginController');

routes.get(`/user/:id`, UserController.index);
routes.post('/user', (req, res) => {
    UserController.store(req,res);
});

routes.post('/login', (req, res) => {
    LoginController.LogInAuthentication(req,res);
});

routes.post('/user/assassins/:userId/likes', (req, res) => {
    LoginController.LogInAuthenticationControl(req, res, LikeController);
});

routes.post('/login/user', (req, res) => {
    LoginController.LogInAuthenticationControl(req, res, null);
});

routes.post('/user/assassins/:id/contract', (req, res) => {
    LoginController.LogInAuthenticationControl(req, res, ContractController);
});

routes.post('/user/:userId/edit', UserController.update);

module.exports = routes;
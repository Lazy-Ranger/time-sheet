const {Router} = require('express');
const {AUTH_CONTROLLER} = require('../controller/auth.controller');

const AUTH_ROUTER = Router();

// Register
AUTH_ROUTER.post('/register/manager',AUTH_CONTROLLER.registerManager);
AUTH_ROUTER.post('/register/employe',AUTH_CONTROLLER.registerEmploye);


// Login

AUTH_ROUTER.post('/login/manager',AUTH_CONTROLLER.loginManager);
AUTH_ROUTER.post('/login/employe',AUTH_CONTROLLER.loginEmploye);

module.exports ={
    AUTH_ROUTER
}
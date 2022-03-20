const {Router} = require('express');
const {AUTH_ROUTER} = require('../modules/auth');
const {EMPLOYEE_ROUTER} = require('../modules/employe');
const {MANAGER_ROUTER} = require('../modules/manager')
const {authorizedToken} = require('../../core/middlewares')


const API_ROUTER = Router();

// Auth routes
API_ROUTER.use('/auth',AUTH_ROUTER);


// Manager 

API_ROUTER.use('/manager',authorizedToken,MANAGER_ROUTER)


// Employee

API_ROUTER.use('/employee',authorizedToken,EMPLOYEE_ROUTER);

module.exports ={
    API_ROUTER
}
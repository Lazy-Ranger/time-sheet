const {Router} = require('express');
const MANAGER_CONTROLLER = require('../controller/manager.controller')

const MANAGER_ROUTER = Router()

// get prfile

MANAGER_ROUTER.get('/',MANAGER_CONTROLLER.getProfile)

// Get employees
MANAGER_ROUTER.get('/employees',MANAGER_CONTROLLER.getEmployees);


// Get time stamp
MANAGER_ROUTER.get('/:employerId',MANAGER_CONTROLLER.getTimeSheetEmploye);

// Update time stamp

MANAGER_ROUTER.put('/time_stamp',MANAGER_CONTROLLER.getUpdateRating)

module.exports ={
    MANAGER_ROUTER
}
const {Router} = require('express');
const EMPLOYER_CONTROLLER = require('../controller/employer.controller')
const EMPLOYEE_ROUTER = Router()
const {multerUpload} = require('../../../../core/middlewares')


// post timesheet
EMPLOYEE_ROUTER.post('/time_Sheet',multerUpload,EMPLOYER_CONTROLLER.postTimeSheet);

// get timesheet

EMPLOYEE_ROUTER.get('/time_sheet',EMPLOYER_CONTROLLER.getTimeSheet);

// update timesheet

EMPLOYEE_ROUTER.put('/time_sheet',multerUpload,EMPLOYER_CONTROLLER.UpdateTimeSheet)

module.exports ={
    EMPLOYEE_ROUTER
}
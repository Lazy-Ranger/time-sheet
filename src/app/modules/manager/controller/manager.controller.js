const {  ManagerService} = require('../services');
const {httpOK,httpException} = require('../../../../core/http')

class ManagerController{
    constructor(){
        this.managerService = ManagerService
    }
    // getProfile

    getProfile = async (req,res)=>{
        const userSession = req.user;
        try{
            const manager = await this.managerService.getProfileData(userSession);
            httpOK(res,manager)
        }catch(err){
            httpException(res,err,`[ManagerControoler] : cannot get Manager profile`)
        }
    }


    // Get employe
    getEmployees = async (req,res)=>{
        const userSession = req.user;
        console.log(userSession)
        try{
            const employees = await this.managerService.getEmployeesById(userSession._id);
            res.status(200).send(employees)
        }catch(err){
            console.log(err);
            res.send('user not found or something went wrong')
        }
    }

    // Get timeSheet

    getTimeSheetEmploye = async (req,res)=>{
        const managerId = req.user;
        const employeeId = req.params
        console.log(employeeId,"employedi")

        try{
            const data = await this.managerService.getEmployeeTimeStamp(managerId._id, employeeId.employerId);
            httpOK(res,data);
        }catch(err){
            httpException(res,err,`[Manager Controller] cannot get time sheet`)
        }
    }

    // Update rating

    getUpdateRating = async (req,res)=>{
        const updateReqBody = req.body;
        console.log(updateReqBody)
        try{
            await this.managerService.ratingEmployeeTimeStamp(updateReqBody);
            res.status(200).send('Ok')
        }catch(err){
            console.log(err);
            res.send('Something went wrong')
        }
    }


}

module.exports = new ManagerController();
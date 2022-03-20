const {EmployeService} = require('../services');
const {http,httpException, httpOK} = require('../../../../core/http')

class EmployeController {
    constructor(){
        this.employeService = EmployeService
    }
    postTimeSheet = async(req,res)=>{
        const timeSheetBody = req.body;
        const employerSession = req.user;
        console.log(timeSheetBody)
        try{
            const data =await this.employeService.postTimeSheet(employerSession, timeSheetBody);
            httpOK(res,data)
        }catch(err){
            httpException(res,err,`[EmployeController] Cannot post time sheet`)
        }
    }

    // Get time Sheet

    getTimeSheet = async (req,res)=>{
        const employerSession = req.user;
        try{
            const data = await this.employeService.getTimeSheet(employerSession._id);
            httpOK(res,data)
        }catch(err){
            httpOK(res,err,`[EmployeService] cannot get Time Sheet`)
        }
    }

    UpdateTimeSheet = async(req,res)=>{
        const employerSession = req.user;
        const updateReq = req.body;

        if(req.file){
            let file= {filename:req.file.filename, size:req.file.size,contentType:req.file.mimetype}
            updateReq.file =file
        }   

        try{
           await this.employeService.updateTimeSheetById(employerSession._id, updateReq);
            http(res,`Updated`)
        }catch(err){
            httpException(res,err,`[EmployeController] : cannot Update Time Sheet`)
        }
    }

}


module.exports = new EmployeController()